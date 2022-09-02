import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/ProductCard/ProductCard";
import CategoryContainer from "../../../common/CategoryContainer/CategoryContainer";
import {gql, request} from 'graphql-request'
import {withRouter} from "../../../hocs/withRouter";


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
    console.log(this.state.category)
    let name = this.state.category.name
    return (
      <MainContainer>


        <CategoryContainer title={name}>
          {this.state.category?.products?.map(({brand, id, gallery, name, prices}) => {
            const price = prices.find(price => price.currency.label === this.props.currency)
            return (
              <Card
                key={id}
                id={id}
                image={gallery[0]}
                brand={brand}
                name={name}
                price={price}
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

}

export default withRouter(CategoryPage);