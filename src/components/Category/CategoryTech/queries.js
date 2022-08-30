import {gql} from "@apollo/client";


export const getTech = gql`
  query GetTech {
     category(input: { title: "tech" }) {
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
