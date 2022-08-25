import {Component} from 'react';
import s from './MainContainer.module.scss'

class MainContainer extends Component {
  render() {
    return (
      <div className={s.mainContainer}>
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer;