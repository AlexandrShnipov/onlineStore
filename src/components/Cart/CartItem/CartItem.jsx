import {Component} from 'react';
import s from './CartItem.module.scss';
import AttributeRender from "../../AttributeRender/AttributeRender";

class CartItem extends Component {
  render() {

    const {brand, name, price,attributes, imageCartProduct, amount, id} =  this.props;

       return (
      <>
        <div className={s.container}>
          <div className={s.productParameters}>
            <h2 className={s.productParametersTitle}>{brand}
              <span>{name}</span>
            </h2>
            <span className={`${s.price} ${s.productParametersPrice}`}>
              {`${price?.currency?.symbol} ${price?.amount}`}
            </span>

            {attributes?.map((attribute, i) =>
              <AttributeRender
                key={i}
                attribute={attribute}
                onCheck={this.toggleCheckedAttribute}
              />)}

          </div>

          <div className={s.counterBlock}>
            <div className={s.counterBlockButtons}>
              <button>&#43;</button>
              <span>{amount}</span>
              <button>&#8722;</button>
            </div>
            <div className={s.counterBlockImagesWrap}>
              <img className={s.counterBlockImages} src={imageCartProduct} alt={`${brand} ${name}`}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CartItem;