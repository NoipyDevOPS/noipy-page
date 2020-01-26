/**
 * Author   :   Allan Nava
 * Modifier :   Allan Nava
 * Update   :   26/01/2020
 * Date     :   26/01/2020
 */
import React from 'react';
///
import './Backdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);
///
export default backdrop;
///