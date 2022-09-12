import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/ProductCard/ProductCard";
import CategoryContainer from "../../../common/CategoryContainer/CategoryContainer";
import {gql, request} from 'graphql-request'
import {withRouter} from "../../../hocs/withRouter";
import {connect} from "react-redux";
import {addProductAC} from "../../../redux/cartReducer";
import {selectCartProductsIds} from "../../../redux/catrSelectors";


class CategoryPage extends Component {

  state = {
    category: {}
  }

  componentDidMount() {
    this.getCategoryProducts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {location} = this.props;
    if (prevProps.location.pathname !== location.pathname) {
      this.getCategoryProducts();
    }
  }

  render() {
    const { props: { cartProducts } } = this;
    console.log(this.state.category)
    console.log('cartProducts', cartProducts)
    let name = this.state.category.name
    return (
      <MainContainer>


        <CategoryContainer title={name}>
          {this.state.category?.products?.map(({brand, id, gallery, name, prices, inStock}) => {
            const price = prices.find(price => price.currency.label === this.props.currency)
           const isAdded = cartProducts?.includes(id);
            return (
              <Card
                key={id}
                id={id}
                image={gallery[0]}
                brand={brand}
                name={name}
                price={price}
                inStock={inStock}
                addProductToCart={this.addProductToCart}
                isAdded={isAdded}
              />
            )
          })}
        </CategoryContainer>
      </MainContainer>
    )
  }

  getCategoryProducts = () => {
    const title = this.props.location.pathname.slice(1);

    const getProducts = gql`
  query GetProducts ($title: String!) {
        category(input: { title: $title }) {
    name
    products {
      id
      name
      brand
      gallery
      inStock
       attributes{
      id
      name
      type
      items{
        id
        displayValue
        value
      }
    }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
  }
  `;
    request('http://localhost:4000/', getProducts, {title})
      .then((data) => {
        console.log('category', data);
        this.setState({category: data.category})
      })
      .catch(err => console.log(err))
  }

  addProductToCart = (id) => {
    const product = this.state.category.products.find(product => product.id === id);
    this.props.addProductAC(product);
  }

}

export default connect(
  (state) => ({ cartProducts: selectCartProductsIds(state) }),
  {addProductAC})(withRouter(CategoryPage))