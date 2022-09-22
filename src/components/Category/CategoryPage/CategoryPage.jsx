import {Component} from 'react';
import MainContainer from '../../../common/MainContainer/MainContainer';
import ProductCard from '../../../common/ProductCard/ProductCard';
import CategoryContainer from '../../../common/CategoryContainer/CategoryContainer';
import {gql, request} from 'graphql-request'
import {withRouter} from '../../../hocs/withRouter';
import {connect} from 'react-redux';
import {addProductAC} from '../../../redux/cartReducer';
import {selectCurrencyLabel} from '../../../redux/catrSelectors';


class CategoryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: {}
    }
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
    let name = this.state.category.name
    return (
      <MainContainer>


        <CategoryContainer title={name}>
          {this.state.category?.products?.map(({brand, id, gallery, name, prices, inStock}) => {
            const price = prices.find(price => price.currency.label === this.props.currency)
            return (
              <ProductCard
                key={id}
                id={id}
                image={gallery[0]}
                brand={brand}
                name={name}
                price={price}
                inStock={inStock}
                addProductToCart={this.addProductToCart}
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
    category
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
  (state) => ({
    currency: selectCurrencyLabel(state)
  }),
  {addProductAC})(withRouter(CategoryPage))