import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/Card/Card";
import CatagoryContainer from "../../../common/CategoryContainer/CategoryContainer";

class CategoryTech extends Component {
  render() {
    return (
      <MainContainer>
        <CatagoryContainer title={'Tech'}>
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

export default CategoryTech