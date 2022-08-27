import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './Cart.module.scss';
import imageCartProduct from '../../images/imageCartProduct.png'

class Cart extends Component {
  render() {
    return (
      <MainContainer>
        <h1 className={s.cartTitle}>Cart</h1>
        <div className={s.container}>
          <div className={s.productParameters}>
            <h2 className={s.productParametersTitle}>Apollo
              <span>Running Short</span>
            </h2>
            <span className={`${s.price} ${s.productParametersPrice}`}>$50.00</span>
            <div className={`${s.productParametersItem} ${s.productParametersSize}`}>
              <h3>Size:</h3>
              <div className={s.productParametersSizeOptions}>
                <span className={s.active}>xs</span>
                <span>s</span>
                <span>m</span>
                <span>l</span>
              </div>
            </div>
            <div className={`${s.productParametersItem} ${s.productParametersColor}`}>
              <h3>Color:</h3>
              <div className={s.productParametersColorOptions}>
                <div className={s.active}>
                  <span style={{background: 'lightGrey'}}></span>
                </div>
                <div>
                  <span style={{background: 'black'}}></span>
                </div>
                <div>
                  <span style={{background: 'green'}}></span>
                </div>
              </div>
            </div>
          </div>

          <div className={s.counterBlock}>
            <div className={s.counterBlockButtons}>
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <div className={s.counterBlockImages}>
              <img src={imageCartProduct} alt='Product photo'/>
            </div>
          </div>
        </div>

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

export default Cart