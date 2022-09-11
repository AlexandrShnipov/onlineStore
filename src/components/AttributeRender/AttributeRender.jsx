import {PureComponent} from "react";
import AttributeWrapper from "../AttributeWrapper/AttributeWrapper";
import AttributeSize from "../AttributeSize/AttributeSize";
import s from "../ProductPage/ProductPage.module.scss";
import AttributeColor from "../AttributeColor/AttributeColor";

class AttributeRender extends PureComponent {

  render() {
    const {attribute} = this.props;
    const checkedItem = attribute?.items?.find((item, i) => item.isChecked);
    const param = attribute.id.toLowerCase();

    switch (param) {
      case 'size':
        return (!!attribute &&
          <AttributeWrapper name={attribute.id} value={checkedItem.displayValue}>
            {attribute?.items.map((item, i) =>
              <AttributeSize
                key={i}
                isChecked={item.isChecked}
                value={item.value}
                onClick={this.onCheckAttributeValue(item.id, param)}
              />)}
          </AttributeWrapper>
        )
      case 'color':
        return (!!attribute &&
          <AttributeWrapper name={attribute.id} value={checkedItem.displayValue}>
            {attribute?.items.map((item, i) => <AttributeColor
              key={i}
              isChecked={item.isChecked}
              background={item.value}
              onClick={this.onCheckAttributeValue(item.id, param)}
            />)}
          </AttributeWrapper>
        )
      case 'capacity':
        return (!!attribute &&
          <AttributeWrapper name={attribute.id} value={checkedItem.displayValue}>
            {attribute?.items.map((item, i) =>
              <AttributeSize
                key={i}
                isChecked={item.isChecked}
                value={item.value}
                onClick={this.onCheckAttributeValue(item.id, param)}
              />)}
          </AttributeWrapper>
        )
    }
  }

  onCheckAttributeValue = (itemId, attributeId) => () => {
    this.props.onCheck(itemId, attributeId);
  }

}

export default AttributeRender;
