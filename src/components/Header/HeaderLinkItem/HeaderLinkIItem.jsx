import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import s from'./HeaderLinkItem.module.scss'

class HeaderLinkIItem extends Component {
  render() {
    return (
      <li className={s.headerItem}>
        <NavLink className=
            {({isActive})=> isActive ? `${s.headerLink} ${s.active}` : s.headerLink}

             to={this.props.to}>{this.props.linkText}</NavLink>
      </li>
    )
  }
}

export default HeaderLinkIItem;