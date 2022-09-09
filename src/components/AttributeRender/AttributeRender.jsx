import {PureComponent} from "react";
import AttributeWrapper from "../AttributeWrapper/AttributeWrapper";
import AttributeSize from "../AttributeSize/AttributeSize";
import s from "../ProductPage/ProductPage.module.scss";

class AttributeRender extends PureComponent {

  render() {
    const { attribute } = this.props;
    const checkedItem = attribute?.items?.find(item => item.isChecked);
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
            {attribute?.items.map((item, i) => (
              <div key={i} className={item.isChecked ? s.active : ''}>
                  <span onClick={this.onCheckAttributeValue(item.id, param)}
                        style={{backgroundColor: item.value}}></span>
              </div>
            ))}
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
