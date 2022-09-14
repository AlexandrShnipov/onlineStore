import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './Cart.module.scss';
import CartItem from "./CartItem/CartItem";
import {connect} from "react-redux";
import {
  decreaseProductsNumberAC, increaseProductsNumberAC
} from "../../redux/cartReducer";

class Cart extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cartItems: {}
  //   };
  // }

  render() {
    const {cartProducts, totalQuantity, totalPrice, currency} = this.props;
    // console.log(cartProducts)
    const tax = 0.21
    const taxAmount = Math.round((totalPrice * tax) * 100) / 100
    const totalAmount = Math.round((taxAmount + totalPrice) * 100) / 100

    return (
      <MainContainer>
        <h1 className={s.cartTitle}>Cart</h1>
        {cartProducts.length === 0 && <p>Your shopping cart is empty</p>}
        {cartProducts.map(product => <CartItem
          brand={product.brand}
          name={product.name}
          price={product.price}
          currency={currency.symbol}
          attributes={product.attributes}
          imageCartProduct={product.gallery}
          amount={product.amount}
          increaseProducts={this.increaseProductsNumber(product.id)}
          decreaseProducts={this.decreaseProductsNumber(product.id)}
        />)}

        <div className={s.cartTotal}>
          <table className={s.cartTotalTable}>
            <tr>
              <th>Tax 21%:</th>
              <td className={s.price}>{`${currency.symbol} ${taxAmount}`}</td>
            </tr>
            <tr>
              <th>Quantity:</th>
              <td className={s.price}>{totalQuantity}</td>
            </tr>
            <tr>
              <th>Total:</th>
              <td className={s.price}>{`${currency.symbol} ${totalAmount}`}</td>
            </tr>
          </table>
          <button>Order</button>
        </div>
      </MainContainer>
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
  totalPrice: state.cart.totalPrice,
  currency: state.cart.currency
}), {increaseProductsNumberAC,
  decreaseProductsNumberAC,
 })(Cart);