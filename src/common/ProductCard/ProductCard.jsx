import {Component} from 'react';
import s from './ProductCard.module.scss'
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";


class Card extends Component {
  render() {
    // console.log(this.props.location)
    const { location, id, image, name, brand, currency, price } = this.props;
    return (
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
        <p className={s.cardPrice}><span>{currency}</span> {price}</p>
      </NavLink>

    )
  }
}

export default withRouter(Card)