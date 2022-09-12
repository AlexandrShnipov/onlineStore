import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './Cart.module.scss';
import CartItem from "./CartItem/CartItem";
import {connect} from "react-redux";
import imageCartProduct from "../../images/imageCartProduct.png";
import {
  decreaseProductAC,
  decreaseProductsNumberAC,
  increaseProductAC,
  increaseProductsNumberAC
} from "../../redux/cartReducer";

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: {}
    };
  }

  render() {
    const {cartProducts} = this.props;
    console.log(cartProducts)

    return (
      <MainContainer>
        <h1 className={s.cartTitle}>Cart</h1>
        {cartProducts.length === 0 && <p>Your shopping cart is empty</p>}
        {cartProducts.map(product => <CartItem
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

  increaseProductsNumber = (id) => () => {
    this.props.increaseProductsNumberAC(id);
  }

  decreaseProductsNumber = (id) => () => {
    this.props.decreaseProductsNumberAC(id)
  }
}

export default connect((state) => ({
  cartProducts: state.cart.cartProducts
}), {increaseProductsNumberAC, decreaseProductsNumberAC})(Cart);