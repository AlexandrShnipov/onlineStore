import {Component} from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png'
import MainContainer from '../../common/MainContainer/MainContainer';
import HeaderLinkIItem from "./HeaderLinkItem/HeaderLinkIItem";
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";
import Select from "./Select/Select";



class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { categories, currencies, currency, onCurrencyChange } = this.props;

    return (
      <MainContainer>
        <header className={s.header}>
          <div className={s.headerContainer}>
            <ul className={s.headerItems}>
              {categories.map((category, index) =>
                <HeaderLinkIItem key={index} menuItem={category.name} />)}
            </ul>
            <img className={s.logo} src={logo} alt=""/>
            <div>
            <Select currencies={currencies} currency={currency} onCurrencyChange={onCurrencyChange}/>
              <NavLink className={s.cartButton} to={`/cart`}>
                <img src={cart} alt=""/>
              </NavLink>
            </div>
          </div>
        </header>
      </MainContainer>
    )
  }
}

export default withRouter(Header);