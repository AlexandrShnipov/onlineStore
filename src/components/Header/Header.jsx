import {Component} from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png'
import MainContainer from '../../common/MainContainer/MainContainer';
import HeaderLinkIItem from "./HeaderLinkItem/HeaderLinkIItem";
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";
import Select from "./Select/Select";
import CartMini from "../CartMini/CartMini";


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCartMiniOpen: false
    };
  }

  handleCartButtonClick = () => {
    this.setState({isCartMiniOpen: !this.state.isCartMiniOpen})
  }


  render() {
    const {isCartMiniOpen} = this.state
    const {categories, currencies, currency, onCurrencyChange} = this.props;

    return <>
      <header className={s.header} onClick={this.handleCartButtonClick}>
        <MainContainer>
          <div className={s.headerWrap}>
            <div className={s.headerWrapContainer}>
              <ul className={s.headerWrapItems}>
                {categories.map((category, index) =>
                  <HeaderLinkIItem key={index} menuItem={category.name}/>)}
              </ul>
              <img className={s.logo} src={logo} alt=""/>
              <div>
                <Select currencies={currencies} currency={currency} onCurrencyChange={onCurrencyChange}/>
                <button className={s.cartButton} onClick={this.handleCartButtonClick}>
                  <img src={cart} alt=""/>
                </button>
              </div>
            </div>

          </div>
        </MainContainer>
      </header>
      {isCartMiniOpen && <CartMini
        isCartMiniOpen={isCartMiniOpen}
        handleCartButtonClick={this.handleCartButtonClick}/>
      }

    </>
  }
}

export default withRouter(Header);