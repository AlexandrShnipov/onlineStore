import {Component} from 'react';
import s from './Images.module.scss';
import {connect} from "react-redux";
import {addProductAC} from "../../../redux/cartReducer";
import {selectCartProductsId, selectCurrencyLabel} from "../../../redux/catrSelectors";

class Images extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainImage: 0
    };
  }

  getMainImage = (index) => () => {
    this.setState({
      mainImage: index
    })
  }

  render() {
    const {gallery, name} = this.props;
    console.log(gallery)

    return (
      <>
        <div className={s.imgBlock}>
          <div className={s.imgBlockSmallImg}>
            {gallery?.map((img, index) => (
              <button key={index} onClick={this.getMainImage(index)}>
                <img src={img} alt={name}/>
              </button>
            ))}
          </div>
          <div className={s.imgBlockBigImg}>
            <img src={gallery?.[this.state.mainImage] ?? ''} alt={name}/>
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