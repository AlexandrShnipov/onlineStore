import {Component} from 'react';
import s from './CartMini.module.scss';
import {NavLink} from "react-router-dom";
import CartItem from "../Cart/CartItem/CartItem";
import {connect} from "react-redux";
import {decreaseProductsNumberAC, deleteProductToCartAC, increaseProductsNumberAC} from "../../redux/cartReducer";

class CartMini extends Component {

  render() {
    const {
      handleCartButtonClickForOpenMiniCart, cartProducts,
      totalQuantity, currency, totalPrice
    } = this.props;
    const tax = 0.21
    const taxAmount = Math.round((totalPrice * tax) * 100) / 100
    const totalAmount = Math.round((taxAmount + totalPrice) * 100) / 100
    return (
      <>
        <div className={s.modal} onClick={handleCartButtonClickForOpenMiniCart}/>
          <div className={s.container}>
            {cartProducts.length ? (
              <>
                <div className={s.cartTitleBlock}>
                  <h2 className={s.cartTitle}>MyBag.&nbsp; </h2>
                  <span>
              {`${totalQuantity}
                  ${totalQuantity === 1 ? 'item' : 'items'}`}
                </span>
                </div>
                <div>
                  {cartProducts.map(product => <CartItem
                    styledCartMini={s.styledCartMini}
                    productParametersTitle={s.productParametersTitle}
                    attributeNameTitle={s.attributeNameTitle}
                    counterBlockCartMini={s.counterBlockCartMini}
                    cartSliderButtonsCartMini={s.cartSliderButtonsCartMini}
                    attributeColorCartMiniWrap={s.attributeColorCartMiniWrap}
                    attributeSizeCartMini={s.attributeSizeCartMini}
                    cartSliderImagesWrapCartMini={s.cartSliderImagesWrapCartMini}
                    brand={product.brand}
                    name={product.name}
                    price={product.price}
                    currency={currency.symbol}
                    attributes={product.attributes}
                    imageCartProduct={product.gallery}
                    amount={product.amount}
                    increaseProducts={this.increaseProductsNumber(product.uniqueId)}
                    decreaseProducts={this.decreaseProductsNumber(product.uniqueId)}
                    deleteProductToCart={this.deleteProductToCart(product.uniqueId)}
                  />)}

                  <div className={s.cartTotal}>
                    <h5>Total</h5>
                    <span>{`${currency.symbol} ${totalAmount}`}</span>
                  </div>

                  <div className={s.buttons}>
                    <NavLink to={'/cart'} onClick={handleCartButtonClickForOpenMiniCart}>view bag</NavLink>
                    <NavLink to={'/'} onClick={handleCartButtonClickForOpenMiniCart}>chek out</NavLink>
                  </div>
                </div>
              </>
            )
              : <p className={s.cartMiniText}>Your shopping cart is empty
                &#128532;</p>}
          </div>
        }

      </>
    )
  }

  increaseProductsNumber = (id) => () => {
    this.props.increaseProductsNumberAC(id);
  }

  decreaseProductsNumber = (id) => () => {
    this.props.decreaseProductsNumberAC(id);
  }

  deleteProductToCart = (id) => () => {
    this.props.deleteProductToCartAC(id);
  }
}

export default connect((state) => ({
  cartProducts: state.cart.cartProducts,
  totalQuantity: state.cart.totalQuantity,
  currency: state.cart.currency,
  totalPrice: state.cart.totalPrice

}), {
  increaseProductsNumberAC,
  decreaseProductsNumberAC,
  deleteProductToCartAC
})(CartMini);