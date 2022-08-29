import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/Card/Card";
import CategoryContainer from "../../../common/CategoryContainer/CategoryContainer";
import {useQuery, gql} from '@apollo/client';
import withHoc from './CategoryWomenHoc';
import HeaderLinkIItem from "../../Header/HeaderLinkItem/HeaderLinkIItem";

// const GET_PRODUCTS = gql`
//   query GetProducts {
//    categories {
//     name
//     products {
//       id
//       name
//     }
//   }
//   }
// `;
//
// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_PRODUCTS);
//
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//   console.log(data)
//   return data.categories.map(({products} ,index) =>
//     products.map(product => (<p key={product.id}>{product.name}</p>))
//   );
// }

class CategoryWomen extends Component {

  render() {
    console.log(this.props.data.categories)

    return (
      <MainContainer>
        <CategoryContainer title={'Women'}>
          {this.props.data.categories.map(({products}, index) =>
            products.map(product =>
              <Card
                key={product.id}
                image={product.gallery[0]}
                brand={product.brand}
                name={product.name}
                currency={product.prices[0].currency.label}
                price={product.prices[0].amount}
              />
            ))}
        </CategoryContainer>
        {/*<DisplayLocations />*/}
      </MainContainer>
    )
  }
}

export default withHoc(CategoryWomen);