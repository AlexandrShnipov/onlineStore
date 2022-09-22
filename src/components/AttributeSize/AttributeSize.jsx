import {PureComponent} from 'react';
import s from './AttributeSize.module.scss';

class AttributeSize extends PureComponent {
  render() {
    const {isChecked, onClick, value, attributeSizeCartMini} = this.props;

    return (
      <span
        onClick={onClick}
        className={isChecked
          ? `${s.attributeSize}  ${s.active} ${attributeSizeCartMini}`
          : `${s.attributeSize} ${attributeSizeCartMini}`}
      >
        {value}
      </span>
    )
  }
}

export default AttributeSize;
