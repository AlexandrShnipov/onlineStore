import React, {Component} from 'react';
import s from './Select.module.scss';
import {withRouter} from '../../../hocs/withRouter';
import {gql, request} from 'graphql-request';
import {connect} from 'react-redux';
import {setCurrencyAC} from '../../../redux/cartReducer';
import {selectCurrencyLabel} from '../../../redux/catrSelectors';
import arrow from '../../../images/arrowForSelect.png'

class Select extends Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    this.state = {
      currencies: [],
      selectedCurrency: 0,
      isActive: false
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onSelectToggle)
    const getCurrencies = gql`
    {
      currencies{
        label
        symbol
     }
    }`

    request('http://localhost:4000/', getCurrencies)
      .then((data) => {

        this.setState({
          currencies: data.currencies
        })
        this.props.setCurrencyAC(data.currencies[0])
      })
      .catch(err => console.log(err))
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onSelectToggle)
  }

  getSelectedCurrency = (index, value) => () => {
    this.setState({
      selectedCurrency: index,
      isActive: false
    })
    const {currencies} = this.state;
    const selectedCurrency = currencies.find(cur => cur.label === value)
    this.props.setCurrencyAC(selectedCurrency)
  }

  inputHandlerClickForOpenDropdown = () => {
    this.setState({
      isActive: true
    })
  }

  render() {
    const {currencies} = this.state;

    return (
      <>
        <div className={s.select} ref={this.selectRef}>
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
              <li className={s.selectItem} key={index}
                  onClick={this.getSelectedCurrency(index, item.label)}>
                {item.label} {item.symbol}
              </li>
            )}
          </ul>
          }
        </div>
      </>
    )
  }

  onSelectToggle = (e) => {
    const {isActive} = this.state;

    if (isActive && !this.selectRef.current.contains(e.target)) {
      this.setState({isActive: false});
    }
  }

}

export default connect(
  state => ({currency: selectCurrencyLabel(state)}),
  {setCurrencyAC})
(withRouter(Select));