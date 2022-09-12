import {Component} from 'react';
import s from './ProductCard.module.scss'
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";
import cart from '../../images/cartWhite.png';
import {connect} from "react-redux";
import {addProductAC} from "../../redux/cartReducer";


class Card extends Component {

  render() {
    // console.log(this.props.location)
    const {location, id, image, name, brand, price, inStock} = this.props;
    return (
      <div className={s.container}>
        <NavLink
          className={s.card}
          to={{
            pathname: `${location.pathname}/${id}`
          }}
        >
          <div className={s.cardImg}>
            <img src={image} alt={name}/>
          </div>
          <h2 className={s.cardTitle}>{brand}, <span>{name}</span></h2>
          <p className={s.cardPrice}><span>{price?.currency?.symbol}</span> {price?.amount}</p>
        </NavLink>
        <button
          className={s.buttonAddInCart}
          onClick={this.onAddToCartClick}>
          <img src={cart} alt='cart images'/>
        </button>
        {
          inStock &&
          <div className={s.stockBox}>
            <span>out of stock</span>
          </div>
        }
      </div>

    )
  }

  onAddToCartClick = () => {
    this.props.addProductToCart(this.props.id);
  }
}


export default connect(null, {addProductAC})(withRouter(Card))