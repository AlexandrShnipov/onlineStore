import {Component} from 'react';
import cardImage from './../../images/cardImage.png'
import s from './Card.module.scss'
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";


class Card extends Component {
  render() {
   // console.log(this.props.location)
    return(
 <NavLink className={s.card} to={`${this.props.location.pathname}/productCard`}>
   <img className={s.cardImg} src={this.props.image} alt={this.props.name}/>
   <h2 className={s.cardTitle}>{this.props.brand}<p>{this.props.name}</p></h2>
   <p className={s.cardPrice}><span>{this.props.currency}</span>{this.props.price}</p>
 </NavLink>

    )
  }
}

export default withRouter(Card)