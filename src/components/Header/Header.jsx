import {Component} from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png'
import MainContainer from "../../common/MainContainer/MainContainer";

class Header extends Component {
  render() {
    return (
      <MainContainer>
        <header className={s.header}>
          <div className={s.headerContainer}>
            <ul className={s.headerItems}>
              <li className={s.headerItem}>
                <a className={`${s.headerLink} ${s.active}`} href="">women</a>
              </li>
              <li className={s.headerItem}>
                <a className={s.headerLink} href="">men</a>
              </li>
              <li className={s.headerItem}>
                <a className={s.headerLink} href="">kids</a>
              </li>
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