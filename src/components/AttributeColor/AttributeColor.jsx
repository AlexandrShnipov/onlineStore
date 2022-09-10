import {PureComponent} from "react";
import s from "./AttributeColor.module.scss";

class AttributeColor extends PureComponent {
  render() {
    const {isChecked, onClick, background} = this.props;

    return (
      <div className={isChecked ? `${s.attributeColor}  ${s.active}` : s.attributeColor}
           onClick={onClick}>
         <span className={s.attribute} style={{background: background}}>
             </span>
      </div>

    )
  }
}

export default AttributeColor;
