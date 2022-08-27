import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/Card/Card";
import CatagoryContainer from "../../../common/CategoryContainer/CategoryContainer";

class CategoryWomen extends Component {
  render() {
    return (
      <MainContainer>
        <CatagoryContainer title={'Women'}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </CatagoryContainer>

      </MainContainer>
    )
  }
}

export default CategoryWomen