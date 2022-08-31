import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/ProductCard/ProductCard";
import CategoryContainer from "../../../common/CategoryContainer/CategoryContainer";
import withHoc from './CategoryTechHoc';

class CategoryTech extends Component {
  render() {
    // console.log(this.props.data.category)
    return (
      <MainContainer>
        <CategoryContainer title={'Tech'}>
          {this.props.data.category?.products?.map(({brand, gallery, name, prices, id}) =>
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

export default withHoc(CategoryTech)