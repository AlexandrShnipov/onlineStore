import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/ProductCard/ProductCard";
import CategoryContainer from "../../../common/CategoryContainer/CategoryContainer";
import withHoc from './CategoryAllHoc';
import {getProducts} from "./queries";


class CategoryAll extends Component {

  render() {
    // console.log(this.props.data.categories)

    return (
      <MainContainer>
        <CategoryContainer title={'All'}>
          {this.props.data.category?.products?.map(({brand, id, gallery, name, prices}) =>
            <Card
              key={id}
              id={id}
              image={gallery[0]}
              brand={brand}
              name={name}
              currency={prices[0].currency.label}
              price={prices[0].amount}
            />
          )}
        </CategoryContainer>
      </MainContainer>
    )
  }
}

export default withHoc(CategoryAll);