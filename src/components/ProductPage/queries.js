import {gql} from "@apollo/client";


export const getProduct = gql`
  query GetProduct {
     product(id: "huarache-x-stussy-le") {
    id
    brand
    name
    description
    gallery
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
  `;
