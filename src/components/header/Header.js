import React from 'react'
import './style.css';
import SearchInput from '../search_input';
import Icon from '../icons';
export default function Header(props) {
    return (
        <div className="header--container">
            <div className="header--search-input-container">
                <SearchInput></SearchInput>
            </div>
            <div className="icons--container">
                    <div className="icons--notification-container">
                            <Icon name='bell' iconStyle={{height:24, width:24, fill:'#999999'}}></Icon>
                    </div>
                    <div className="icons--engineering--container">
                            <Icon name='engineering' iconStyle={{height:24, width:24, fill:'#999999'}}></Icon>
                    </div>
                    <div className="icons--button-container">
                        <div className='icons--button'>
                                    <p>Upgrade Plan</p>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}
