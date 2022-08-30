import {Component} from "react";
import s from './CatagoryContainer.module.scss'

class CategoryContainer extends Component {
  render() {
    return(
     <div className={s.container}>
       <h1 className={s.title}>{this.props.title}</h1>
       <div className={s.cardsContainer}>
         {this.props.children}
       </div>
     </div>
    )
  }
}

export default CategoryContainer