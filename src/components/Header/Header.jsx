import {Component} from 'react';
import s from './Header.module.scss';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png'
import MainContainer from '../../common/MainContainer/MainContainer';
import HeaderLinkIItem from "./HeaderLinkItem/HeaderLinkIItem";
import {withRouter} from "../../hocs/withRouter";
import Select from "./Select/Select";
import CartMini from "../CartMini/CartMini";
import {connect} from "react-redux";
import {decreaseProductsNumberAC, deleteProductToCartAC, increaseProductsNumberAC} from "../../redux/cartReducer";


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCartMiniOpen: true
    };
  }

  handleCartButtonClickForOpenMiniCart = (e) => {
    this.setState({isCartMiniOpen: !this.state.isCartMiniOpen});
    e.stopPropagation()
    console.log('click')
  }

  handleHeaderClick = () => {
    this.setState({isCartMiniOpen: this.state.isCartMiniOpen ? !this.state.isCartMiniOpen : null})
  }


  render() {
    const {isCartMiniOpen} = this.state
    const {categories, totalQuantity} = this.props;

    return <>
      <header className={s.header} onClick={this.handleHeaderClick}>
        <MainContainer>
          <div className={s.headerWrap}>
            <div className={s.headerWrapContainer}>
              <ul className={s.headerWrapItems}>
                {categories.map((category, index) =>
                  <HeaderLinkIItem key={index} menuItem={category.name}/>)}
              </ul>
              <img className={s.logo} src={logo} alt=""/>
              <div className={s.headerSelectAndCartBlock}>
                <Select/>
                <div className={s.cartButtonWrap}>
                  <button className={s.cartButton} onClick={this.handleCartButtonClickForOpenMiniCart}>
                    <img src={cart} alt=""/>
                  </button>

                  {
                    totalQuantity > 0 &&
                    <span className={s.cartCount}>{totalQuantity}</span>
                  }

                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </header>
      {isCartMiniOpen && <CartMini
        isCartMiniOpen={isCartMiniOpen}
        handleCartButtonClickForOpenMiniCart={this.handleCartButtonClickForOpenMiniCart}/>
      }

    </>
  }
}

export default connect((state) => ({
  totalQuantity: state.cart.totalQuantity

}), null)(withRouter(Header));
