import {Component} from 'react';
import s from './Select.module.scss';
import {withRouter} from "../../../hocs/withRouter";
import {gql, request} from "graphql-request";
import {connect} from "react-redux";
import {setCurrencyAC} from "../../../redux/cartReducer";
import {selectCurrencyLabel} from "../../../redux/catrSelectors";
import arrow from '../../../images/arrowForSelect.png'

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      selectedCurrency: 0,
      isActive: false
    }
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

  //
  // onChange = (event) => {
  //   const {currencies} = this.state;
  //   const selectedCurrency = currencies.find(cur => cur.label === event.target.value)
  //   this.props.setCurrencyAC(selectedCurrency)
  //   console.log(event.target.value)
  // }

  getSelectedCurrency = (index,) => (event) => {
    this.setState({
      selectedCurrency: index,
      isActive: false
    })
    const {currencies} = this.state;
    const selectedCurrency = currencies.find(cur => cur.label === event.target.value)
    this.props.setCurrencyAC(selectedCurrency)
  }

  inputHandlerClickForOpenDropdown = () => {
    this.setState({
      isActive: true
    })
  }


  render() {
    const {state: {currencies}, props: {currency}} = this;

    return (
      <>
        {/*<select className={s.select} onChange={this.onChange}>*/}
        {/*  {currencies.map((item, index) =>*/}
        {/*    <option key={index} value={item.label}>*/}
        {/*      {item.symbol} {item.label}*/}
        {/*    </option>)}*/}
        {/*</select>*/}

        <div className={s.select}>
          <button className={s.selectBtn}
                  value={currencies[this.state.selectedCurrency]?.symbol}
                  onClick={this.inputHandlerClickForOpenDropdown}
          >
            {currencies[this.state.selectedCurrency]?.symbol}
            {!this.state.isActive ?
              <img className={s.arrow} src={arrow} alt={arrow} style={{transform: 'rotate(180deg)'}}/>
              : <img className={s.arrow} src={arrow} alt={arrow} style={{transform: 'rotate(0)'}}/>
            }
          </button>
          {this.state.isActive &&
          <ul className={s.selectContent}>
            {currencies.map((item, index) =>
              <li className={s.selectItemWrap}>
                {item.label} {item.symbol}
                <input className={s.selectItem}
                       key={index}
                       value={item.label}
                       onClick={this.getSelectedCurrency(index)}
                       tabIndex={index}
                />
              </li>
            )}
          </ul>
          }
        </div>
      </>
    )
  }
}

export default connect(
  state => ({currency: selectCurrencyLabel(state)}),
  {setCurrencyAC})
(withRouter(Select));