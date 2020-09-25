import React from 'react';
import './style.css';

export default function BillBoardMusic(props) {
    const { musicImage, artist, title} = props;
    return (
        <div className='billboard-music--container'>
            <img src={musicImage}></img>
            <p id='music-title'>{title}</p>
            <p id='music-author'>{artist}</p>
        </div>
    )
}
