import {Component} from 'react';
import s from './ProductCard.module.scss'
import {NavLink} from "react-router-dom";
import {withRouter} from "../../hocs/withRouter";


class Card extends Component {
  render() {
    // console.log(this.props.location)
    return (
      <NavLink className={s.card} to={`${this.props.location.pathname}/productCard`}>
        <div className={s.cardImg}>
          <img src={this.props.image} alt={this.props.name}/>
        </div>
        <h2 className={s.cardTitle}>{this.props.brand}, <span>{this.props.name}</span></h2>
        <p className={s.cardPrice}><span>{this.props.currency}</span> {this.props.price}</p>
      </NavLink>

    )
  }
}

export default withRouter(Card)