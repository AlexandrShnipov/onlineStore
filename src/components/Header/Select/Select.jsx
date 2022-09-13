import {Component} from 'react';
import s from './Select.module.scss';
import {withRouter} from "../../../hocs/withRouter";

class Select extends Component {

  onChange = (event) => {
    const currencyActive =
    this.props.onCurrencyChange(event.target.value)
    console.log(event.target.value)
  }

  render() {
    const {currencies, currency} = this.props;
    return (
      <select className={s.select} value={currency} onChange={this.onChange}>
        {currencies.map((item, index) =>
          <option key={index} value={item.label}>
            {item.symbol} {item.label}
          </option>)}
      </select>
    )
  }
}

export default withRouter(Select);