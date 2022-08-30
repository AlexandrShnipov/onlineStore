import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/Card/Card";
import CategoryContainer from "../../../common/CategoryContainer/CategoryContainer";
import withHoc from './CategoryClothesHoc';

class Clothes extends Component {

  render() {
    // console.log(this.props.data.category)
    return (
      <MainContainer>
        <CategoryContainer title={'Clothes'}>
          {this.props.data.category?.products?.map(({brand, id, gallery, name, prices}, index) =>
              <Card
                key={id}
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

export default withHoc(Clothes);