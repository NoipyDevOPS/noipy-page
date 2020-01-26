/**
 * Author   :   Allan Nava
 * Modifier :   Allan Nava
 * Update   :   26/01/2020
 * Date     :   26/01/2020
 */
import React from 'react'
///
import './SideDrawer.css'
//
const sideDrawer = props => {
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  )
}
///
export default sideDrawer
///