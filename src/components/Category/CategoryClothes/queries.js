import {gql} from "@apollo/client";


export const getClothes = gql`
  query GetClothes {
     category(input: { title: "clothes" }) {
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
