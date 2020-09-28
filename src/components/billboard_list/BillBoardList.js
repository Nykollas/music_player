import React from "react";
import "./style.css";
import BillBoardMusic from "../billboard_music";
export default function BillBoardList(props) {
    const { setTrackIndex} = props;
  return (
    <div draggable="false" {...props} className="billboard-list--container">
      <p id="billboard-list--title">Billboard Topchart</p>
      <div draggable="false" className="billboard-list--row">
        {props.data.length > 0 ? (
          props.data.map((val, index, arr) => {
            return (
              <BillBoardMusic
              setTrackIndex={setTrackIndex}
                index={index}
                musicImage={val.album.images[0].url}
                title={val.name}
                artist={val.artists[0].name}
              ></BillBoardMusic>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
