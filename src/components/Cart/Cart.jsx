import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './Cart.module.scss';
import CartItem from './CartItem/CartItem';
import {connect} from 'react-redux';
import {
  decreaseProductsNumberAC, deleteProductToCartAC, increaseProductsNumberAC
} from '../../redux/cartReducer';
import {NavLink} from 'react-router-dom';
import {withRouter} from '../../hocs/withRouter';

class Cart extends Component {

  render() {
    const {cartProducts, totalQuantity, totalPrice, currency, location, id, category} = this.props;
    const tax = 0.21
    const taxAmount = Math.round((totalPrice * tax) * 100) / 100
    const totalAmount = Math.round((taxAmount + totalPrice) * 100) / 100
    return (
      <MainContainer>
        <h1 className={s.cartTitle}>Cart</h1>
        {cartProducts.length ? (
            <>
              {cartProducts.map((product, index) => <CartItem
                key={index}
                category={product.category}
                location={location}
                id={product.id}
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
                <table className={s.cartTotalTable}>
                  <tbody>
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
                  </tbody>
                </table>
                <button>Order</button>
              </div>
            </>
          )
          : <p className={s.cartText}>Your shopping cart is empty
            &#128532;. But it's easy to fix!
            <NavLink to={'/'}> Go shopping &#128293;</NavLink>
          </p>}

      </MainContainer>
    )
  }

  increaseProductsNumber = (id) => () => {
    this.props.increaseProductsNumberAC(id);
  }

  decreaseProductsNumber = (id) => () => {
    this.props.decreaseProductsNumberAC(id)
  }

  deleteProductToCart = (id) => () => {
    this.props.deleteProductToCartAC(id)
  }
}

export default connect((state) => ({
  cartProducts: state.cart.cartProducts,
  totalQuantity: state.cart.totalQuantity,
  totalPrice: state.cart.totalPrice,
  currency: state.cart.currency
}), {
  increaseProductsNumberAC,
  decreaseProductsNumberAC,
  deleteProductToCartAC
})(withRouter(Cart));