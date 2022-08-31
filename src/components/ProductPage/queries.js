import {gql} from "@apollo/client";


export const getProducts = gql`
  query GetProducts {
    categories {
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
