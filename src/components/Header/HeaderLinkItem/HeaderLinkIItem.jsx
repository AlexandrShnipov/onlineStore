import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import s from'./HeaderLinkItem.module.scss'

class HeaderLinkIItem extends Component {
  render() {
    const { menuItem } = this.props;
    const menuItemStyles = ({isActive})=> isActive ? `${s.headerLink} ${s.active}` : s.headerLink;
// console.log('menuItem', menuItem)
    return (
      <li className={s.headerItem}>
        <NavLink className={menuItemStyles} to={menuItem}>
          {menuItem}
        </NavLink>
      </li>
    )
  }
}

export default HeaderLinkIItem;