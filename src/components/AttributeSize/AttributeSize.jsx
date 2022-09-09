import {PureComponent} from "react";
import s from "./AttributeSize.module.scss";

class AttributeSize extends PureComponent {
  render() {
    const { isChecked, onClick, value } = this.props;

    return (
      <span
        onClick={onClick}
        className={isChecked ? `${s.attributeSize} ${s.active}` : s.attributeSize}
      >
        {value}
      </span>
    )
  }
}

export default AttributeSize;
