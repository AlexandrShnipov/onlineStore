import {PureComponent} from "react";
import s from "./AttributeWrapper.module.scss";

class AttributeWrapper extends PureComponent {
  render() {
    const {
      children, name, value, attributeNameTitle,
      productParametersItemCartMini
    } = this.props;

    return (
      <div className={`${s.productParametersItem} ${productParametersItemCartMini}`}>
        <h3 className={attributeNameTitle}>{`${name}: ${value}`}</h3>
        <div className={s.productParametersAttributeOptions}>
          {children}
        </div>
      </div>
    )
  }
}

export default AttributeWrapper;
