import {Component} from 'react';
import s from './Select.module.scss';
import {withRouter} from "../../../hocs/withRouter";
import {gql, request} from "graphql-request";
import {connect} from "react-redux";
import {setCurrencyAC} from "../../../redux/cartReducer";
import {selectCurrencyLabel} from "../../../redux/catrSelectors";

class Select extends Component {

  state = {
    currencies: []
  }

  componentDidMount() {
    const getCurrencies = gql`
    {
      currencies{
        label
        symbol
     }
    }`

    request('http://localhost:4000/', getCurrencies)
      .then((data) => {
        const {currencies} = this.state
        console.log('currencies', data);
        this.setState({
          currencies: data.currencies
        })
        this.props.setCurrencyAC(data.currencies[0])
      })
      .catch(err => console.log(err))
  }

  onChange = (event) => {
    const { currencies } = this.state;
    const selectedCurrency = currencies.find(cur => cur.label === event.target.value)
    this.props.setCurrencyAC(selectedCurrency)
    console.log(event.target.value)
  }

  render() {
    const {state: { currencies }, props: {currency}} = this;
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

export default connect(
  state => ({ currency: selectCurrencyLabel(state) }),
{setCurrencyAC})
(withRouter(Select));