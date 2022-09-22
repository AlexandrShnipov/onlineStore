import {PureComponent} from 'react';
import AttributeWrapper from '../AttributeWrapper/AttributeWrapper';
import AttributeSize from '../AttributeSize/AttributeSize';
import AttributeColor from '../AttributeColor/AttributeColor';

class AttributeRender extends PureComponent {


  onCheckAttributeValue = (itemId, attributeId) => () => {
    this.props.onCheck(itemId, attributeId);
  }

  render() {
    const {onCheckAttributeValue} = this;
    const {
      attribute, attributeNameTitle, attributeColorCartMiniWrap,
      attributeSizeCartMini
    } = this.props;
    const checkedItem = attribute?.items?.find((item, i) => item.isChecked);
    const param = attribute.id.toLowerCase();

    switch (param) {
      case 'size':
        return (!!attribute &&
          <AttributeWrapper attributeNameTitle={attributeNameTitle}
                            name={attribute.id}
                            value={checkedItem.displayValue}>
            {attribute?.items.map((item, i) =>
              <AttributeSize
                attributeSizeCartMini={attributeSizeCartMini}
                key={i}
                isChecked={item.isChecked}
                value={item.value}
                onClick={onCheckAttributeValue(item.id, param)}
              />)}
          </AttributeWrapper>
        )
      case 'color':
        return (!!attribute &&
          <AttributeWrapper attributeNameTitle={attributeNameTitle} name={attribute.id}
                            value={checkedItem.displayValue}>
            {attribute?.items.map((item, i) => <AttributeColor
              attributeColorCartMiniWrap={attributeColorCartMiniWrap}
              key={i}
              isChecked={item.isChecked}
              background={item.value}
              onClick={onCheckAttributeValue(item.id, param)}
            />)}
          </AttributeWrapper>
        )
      case 'capacity':
        return (!!attribute &&
          <AttributeWrapper attributeNameTitle={attributeNameTitle} name={attribute.id}
                            value={checkedItem.displayValue}>
            {attribute?.items.map((item, i) =>
              <AttributeSize
                attributeSizeCartMini={attributeSizeCartMini}
                key={i}
                isChecked={item.isChecked}
                value={item.value}
                onClick={onCheckAttributeValue(item.id, param)}
              />)}
          </AttributeWrapper>
        )
    }
  }
}

export default AttributeRender;
