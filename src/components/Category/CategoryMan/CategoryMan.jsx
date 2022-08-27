import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/Card/Card";
import CatagoryContainer from "../../../common/CategoryContainer/CategoryContainer";

class CategoryMan extends Component {
  render() {
    return (
      <MainContainer>
        <CatagoryContainer title={'Man'}>
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

export default CategoryMan