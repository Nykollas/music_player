import React from 'react';
import './style.css';
import Icons from '../icons';

export default function SearchInput(props) {
    return (
        <div className="search-input--container">
            <Icons name='search' iconStyle={{height:24, width:24, viewBox:'0 0 1000 1000', fill:'#000000'}}></Icons>
            <input type='text' placeholder='Search for songs artists etc.'></input>
        </div>
    )
}
