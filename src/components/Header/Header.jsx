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

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCartMiniOpen: false
    };
  }

  handlerCartButtonClickForOpenMiniCart = (e) => {
    this.setState({isCartMiniOpen: !this.state.isCartMiniOpen});
    e.stopPropagation()
  }

  handlerClickClosedMiniCart = () => {
    console.log('click')
    this.setState({isCartMiniOpen: this.state.isCartMiniOpen ? !this.state.isCartMiniOpen : null})
  }


  render() {
    const {isCartMiniOpen} = this.state
    const {categories, cartProducts} = this.props;
    const {handlerClickClosedMiniCart, handlerCartButtonClickForOpenMiniCart} = this;

    return <>
      <header className={s.header} onClick={handlerClickClosedMiniCart}>
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
                  <button className={s.cartButton} onClick={handlerCartButtonClickForOpenMiniCart}>
                    <img src={cart} alt=""/>
                    {
                      cartProducts.length > 0 &&
                      <span className={s.cartCount}>{cartProducts.length}</span>
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </header>
      {isCartMiniOpen && <CartMini
        isCartMiniOpen={isCartMiniOpen}
        handlerClickClosedMiniCart={handlerClickClosedMiniCart}
        handlerCartButtonClickForOpenMiniCart={handlerCartButtonClickForOpenMiniCart}/>
      }

    </>
  }
}

export default connect((state) => ({
  cartProducts: state.cart.cartProducts,
}), null)(withRouter(Header));
