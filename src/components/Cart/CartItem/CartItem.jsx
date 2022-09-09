import {Component} from 'react';
import s from './CartItem.module.scss';
import imageCartProduct from '../../../images/imageCartProduct.png'

class CartItem extends Component {
  render() {
       return (
      <>
        <div className={s.container}>
          <div className={s.productParameters}>
            <h2 className={s.productParametersTitle}>{this.props.brand}
              <span>{this.props.name}</span>
            </h2>
            <span className={`${s.price} ${s.productParametersPrice}`}>
              {`${this.props.price?.currency?.symbol} ${this.props?.price?.amount}`}
            </span>
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
      </>
    )
  }
}

export default CartItem;