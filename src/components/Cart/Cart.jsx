import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './Cart.module.scss';
import CartItem from "./CartItem/CartItem";

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: {}
    };
  }

  render() {
    return (
      <MainContainer>
        <h1 className={s.cartTitle}>Cart</h1>

        {this.state.cartItems.map((cartItem, i) =>
          <CartItem key={i} {...cartItem}/>)}

        <div className={s.cartTotal}>
          <table className={s.cartTotalTable}>
            <tr>
              <th>Tax 21%:</th>
              <td className={s.price}>$42.00</td>
            </tr>
            <tr>
              <th>Quantity:</th>
              <td className={s.price}>3</td>
            </tr>
            <tr>
              <th>Total:</th>
              <td className={s.price}>$200.00</td>
            </tr>
          </table>
        </div>
      </MainContainer>
    )
  }
}

export default Cart;