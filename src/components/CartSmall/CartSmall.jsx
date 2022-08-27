import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './CartSmall.module.scss';
import imageCartProduct from '../../images/imageCartProduct.png'

class CartSmall extends Component {
  render() {
    return (
      <div className={s.modale}>
        <div className={s.container}>
          <div className={s.cartTitleBlock}>
            <h2 className={s.cartTitle}>MyBag.</h2>
            <span>3</span><span>items</span>
          </div>

          <div className={s.productParameters}>
            <div className={s.productParametersDescription}>
              <h3 className={s.productParametersTitle}>
                Apollo Running Short
              </h3>
              <span className={s.productParametersPrice}>$50.00</span>
              <div className={`${s.productParametersItem} ${s.productParametersSize}`}>
                <h4>Size:</h4>
                <div className={s.productParametersSizeOptions}>
                  <span className={s.active}>xs</span>
                  <span>s</span>
                  <span>m</span>
                  <span>l</span>
                </div>
              </div>
              <div className={`${s.productParametersItem} ${s.productParametersColor}`}>
                <h4>Color:</h4>
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

            <div className={s.productParametersCounterBlock}>
              <div className={s.productParametersCounterBlockButtons}>
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </div>
              <div className={s.productParametersCounterBlockImages}>
                <img src={imageCartProduct} alt='Product photo'/>
              </div>
            </div>
          </div>


          <div className={s.cartTotal}>
            <h5>Total</h5>
            <span>$200.00</span>
          </div>

          <div className={s.buttons}>
            <a href={'/'}>view bag</a>
            <a href={'/'}>chek out</a>
          </div>
        </div>
      </div>

    )
  }
}

export default CartSmall