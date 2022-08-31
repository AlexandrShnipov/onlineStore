import {gql} from "@apollo/client";


export const getProduct = gql`
  query GetProduct {
     product(id: "xbox-series-s") {
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
