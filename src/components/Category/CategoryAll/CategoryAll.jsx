import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../ProductPage/ProductPage";
import CategoryContainer from "../../../common/CategoryContainer/CategoryContainer";
import withHoc from './CategoryAllHoc';


class CategoryAll extends Component {

  render() {
    // console.log(this.props.data.categories)

    return (
      <MainContainer>
        <CategoryContainer title={'All'}>
          {this.props.data.categories?.map(({products}, index) =>
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
      </MainContainer>
    )
  }
}

export default withHoc(CategoryAll);