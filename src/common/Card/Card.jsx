import {Component} from 'react';
import cardImage from './../../images/cardImage.png'
import s from './Card.module.scss'


class Card extends Component {
  render() {
    return(
 <a className={s.card}>
   <img className={s.cardImg} src={cardImage} alt=""/>
   <h2 className={s.cardTitle}>Apollo Running Short</h2>
   <p className={s.cardPrice}><span>$</span>50.00</p>
 </a>

    )
  }
}

export default Card