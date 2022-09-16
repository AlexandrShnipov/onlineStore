import {Component} from 'react';
import s from './Images.module.scss';
import {connect} from "react-redux";
import {addProductAC} from "../../../redux/cartReducer";
import {selectCartProductsId, selectCurrencyLabel} from "../../../redux/catrSelectors";

class Images extends Component {

  render() {
    const {gallery, name} = this.props ?? {};

    return (
      <>
        <div className={s.imgBlock}>
          <div className={s.imgBlockSmallImg}>
            {gallery?.map((img, index) => (
              <button key={index}>
                <img src={img} alt={name}/>
              </button>
            ))}
          </div>
          <div className={s.imgBlockBigImg}>
            <img src={gallery?.[0]} alt={name}/>
          </div>
        </div>
      </>
    )
  }
}

export default connect(
  state => ({
    currency: selectCurrencyLabel(state),
    cartProducts: selectCartProductsId(state)
  }),
  {addProductAC})
(Images);