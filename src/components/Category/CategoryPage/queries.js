import {gql} from "@apollo/client";


export const getProducts = gql`
  query GetProducts {
        category(input: { title: "all" }) {
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
