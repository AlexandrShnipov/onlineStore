import {Component} from "react";
import MainContainer from "../../../common/MainContainer/MainContainer";
import Card from "../../../common/Card/Card";
import CategoryContainer from "../../../common/CategoryContainer/CategoryContainer";

class Kids extends Component {
  render() {
    return (
      <MainContainer>
        <CategoryContainer title={'Kids'}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </CategoryContainer>

      </MainContainer>
    )
  }
}

export default Kids