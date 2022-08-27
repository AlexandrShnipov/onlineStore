import {Component} from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png'
import MainContainer from '../../common/MainContainer/MainContainer';
import HeaderLinkIItem from "./HeaderLinkItem/HeaderLinkIItem";

class Header extends Component {
  constructor(props) {
    super(props);
    this.links = [
      {to: '/women', linkText: 'women'},
      {to: '/man', linkText: 'man'},
      {to: '/kids', linkText: 'kids'}
    ];
    this.linksList = this.links.map((link, index) =>
      <HeaderLinkIItem key={index} {...link}/>)
  }

  render() {
    return (
      <MainContainer>
        <header className={s.header}>
          <div className={s.headerContainer}>
            <ul className={s.headerItems}>
              {this.linksList}
            </ul>
            <img className={s.logo} src={logo} alt=""/>
            <div>
              <select className={s.selectionMoney}>
                <option>$ usd</option>
                <option>€ eur</option>
                <option>¥ jpy</option>
              </select>
              <button className={s.cartButton}>
                <img src={cart} alt=""/>
              </button>
            </div>
          </div>
        </header>
      </MainContainer>
    )
  }
}

export default Header;