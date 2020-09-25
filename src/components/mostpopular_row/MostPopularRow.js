import React from "react";
import "./style.css";
import Icon from '../icons';
export default function MostPopularRow(props) {
  const {
    index,
    musicImageUrl,
    musicTitle,
    musicArtist,
    musicDuration,
  } = props;

  return (
    <div className="most-popular-row--container">
      <div className="most-popular--index">{index}</div>
      <img id="music-image" src={musicImageUrl}></img>
      <p id="music-title">{musicTitle}</p>
      <p id="music-artist">{musicArtist}</p>
      <p id="music-duration">{musicDuration}</p>
      <Icon name="heart" iconStyle={{ height: 24, width: 24, fill:'#777777' }}></Icon>
    </div>
  );
}
