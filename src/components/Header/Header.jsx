import {Component} from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png'
import MainContainer from '../../common/MainContainer/MainContainer';
import HeaderLinkIItem from "./HeaderLinkItem/HeaderLinkIItem";
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories } = this.props;
    // console.log(this.props.location)
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
              <select className={s.selectionMoney}>
                <option>$ usd</option>
                <option>€ eur</option>
                <option>¥ jpy</option>
              </select>
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