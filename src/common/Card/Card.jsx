import {Component} from 'react';
import cardImage from './../../images/cardImage.png'
import s from './Card.module.scss'
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";


class Card extends Component {
  render() {
    console.log(this.props.location)
    return(
 <NavLink className={s.card} to={`${this.props.location.pathname}/productCard`}>
   <img className={s.cardImg} src={cardImage} alt=""/>
   <h2 className={s.cardTitle}>Apollo Running Short</h2>
   <p className={s.cardPrice}><span>$</span>50.00</p>
 </NavLink>

    )
  }
}

export default withRouter(Card)