import {Component} from 'react';
import s from './ProductCard.module.scss'
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";
import cart from '../../images/cartWhite.png';


class Card extends Component {

  handleButtonAddInCartClick = (e) => {
    alert('hi')
    e.stopPropagation()
  }

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
          <button
            className={s.buttonAddInCart}
            onClick={this.handleButtonAddInCartClick}>
            <img src={cart} alt='cart images'/>
          </button>
        </NavLink>
        {/*{*/}
        {/*  inStock &&*/}
        {/*  <div className={s.stockBox}>*/}
        {/*    <span>out of stock</span>*/}
        {/*  </div>*/}
        {/*}*/}
      </div>

    )
  }
}

export default withRouter(Card)