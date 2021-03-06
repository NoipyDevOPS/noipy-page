/**
 * Author   :   Allan Nava
 * Modifier :   Allan Nava
 * Update   :   26/01/2020
 * Date     :   26/01/2020
 */
import React from 'react'
///
import './DrawerToggleButton.css'
///
const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
)
///
export default drawerToggleButton
///