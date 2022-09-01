import {Component} from 'react';
import s from './CurrentSelected.module.scss';
import {withRouter} from "../../../hocs/withRouter";

class CurrentSelected extends Component {

  render() {
    const { currencies } = this.props;
    console.log(currencies)

    return (
      <select className={s.currentSelected}>
        {currencies.map((currency, index)=> <option key={index}>{currency.symbol} {currency.label}</option>)}

        <option>€ eur</option>
        <option>¥ jpy</option>
      </select>
    )
  }
}

export default withRouter(CurrentSelected);