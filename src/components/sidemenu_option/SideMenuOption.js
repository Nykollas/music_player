import React from 'react';
import Icon from '../icons';
import './style.css';
const SideMenuOption = props => {
    const { iconName, iconStyle } = props;
    return (
        <div className='sidemenu-option--container'>
                <div className="sidemenu-option--icon-container">
                     <Icon iconStyle={iconStyle} name={iconName}></Icon>
                </div>
                <div className='sidemenu-option--label'>
                    <p>{props.label}</p>
                </div>
        </div>
    )
}


export default SideMenuOption
