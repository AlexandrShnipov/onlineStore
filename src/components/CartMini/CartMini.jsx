import {Component} from 'react';
import s from './CartMini.module.scss';
import imageCartProduct from '../../images/imageCartProduct.png'
import {NavLink} from "react-router-dom";
import CartItem from "../Cart/CartItem/CartItem";
import {connect} from "react-redux";
import {decreaseProductsNumberAC, increaseProductsNumberAC} from "../../redux/cartReducer";
import {selectCurrencyLabel} from "../../redux/catrSelectors";

class CartMini extends Component {

  render() {
    const {handleCartButtonClickForOpenMiniCart, cartProducts, totalQuantity} = this.props;
    return (
      <>

        <div className={s.modal} onClick={handleCartButtonClickForOpenMiniCart}/>
        <div className={s.container}>
          {cartProducts.length === 0  && <p>Your shopping cart is empty</p>}
          <div className={s.cartTitleBlock}>
            <h2 className={s.cartTitle}>MyBag.&nbsp; </h2>
            <span>
              {totalQuantity}&nbsp;
              {totalQuantity === 1 ? 'item' : 'items'}
          </span>
          </div>
          <div>
            {cartProducts.map(product => <CartItem
              styledCartMini={s.styledCartMini}
              productParametersTitle={s.productParametersTitle}
              productParametersItemCartMini={s.productParametersItemCartMini}
              attributeNameTitle={s.attributeNameTitle}
              counterBlockCartMini={s.counterBlockCartMini}
              attributeColorCartMiniWrap={s.attributeColorCartMiniWrap}
              attributeSizeCartMini={s.attributeSizeCartMini}
              counterBlockImagesWrapCartMini={s.counterBlockImagesWrapCartMini}
              brand={product.brand}
              name={product.name}
              price={product.prices?.find(price => price.currency.label === this.props.currency)}
              attributes={product.attributes}
              imageCartProduct={product.gallery}
              amount={product.amount}
              increaseProducts={this.increaseProductsNumber(product.id)}
              decreaseProducts={this.decreaseProductsNumber(product.id)}
            />)}

            <div className={s.cartTotal}>
              <h5>Total</h5>
              <span>$200.00</span>
            </div>

            <div className={s.buttons}>
              <NavLink to={'/cart'} onClick={handleCartButtonClickForOpenMiniCart}>view bag</NavLink>
              <NavLink to={'/'} onClick={handleCartButtonClickForOpenMiniCart}>chek out</NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }

  increaseProductsNumber = (id) => () => {
    this.props.increaseProductsNumberAC(id);
  }

  decreaseProductsNumber = (id) => () => {
    this.props.decreaseProductsNumberAC(id)
  }
}

export default connect((state) => ({
  cartProducts: state.cart.cartProducts,
  totalQuantity: state.cart.totalQuantity,
  currency: selectCurrencyLabel(state)
}), {
  increaseProductsNumberAC,
  decreaseProductsNumberAC,
})(CartMini);