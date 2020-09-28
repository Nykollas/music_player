import React, { useEffect } from "react";
import "./style.css";
import Icon from "../icons";
import SpotifyPlayer from "react-spotify-web-playback";

export default function MusicPlayer(props) {

  return (
    <div className="music-player--container">
      <p id="music-player-section-title">Now Playing</p>
      <p id="music-player-label">55 Items on the list</p>
      <div className="music-player--music-card">
          {props.data.length > 0 ? 
                <div className="music-player--music-info" style={{
                    objectFit:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    backgroundImage:
                        "url("+props.data[props.trackSelectedIndex].album.images[0].url+")",
                    }}>  
                </div>
                :
                <></>
        }
        </div>
        {props.data.length > 0 && props.token != "" ?
                <SpotifyPlayer
                token={props.token}
                uris={[props.data[props.trackSelectedIndex].uri]}
              />
              :
              <></>
        }
        {/* <div className='music-player--buttons'>
                    <div className='music-player--button-icon'>
                        <Icon name='alternate' iconStyle={{height:32, width:32, fill:'#666666'}}></Icon>
                    </div>
                    <div className='music-player--button-icon'>
                        <Icon name='double-right-arrow' iconStyle={{height:32, width:32,fill:'#666666'}}></Icon>
                    </div>
                    <div className='pause-button--layer'>
                        <div id='pause-button' className='music-player--button-icon'>
                            <Icon name='pause' iconStyle={{height:24, width:24,fill:'#666666'}}></Icon>
                        </div>
                    </div>

                    <div className='music-player--button-icon'>
                        <Icon name='double-left-arrow' iconStyle={{height:32, width:32,fill:'#666666'}}></Icon>
                    </div>

                    <div className='music-player--button-icon'>
                        <Icon name='repeat' iconStyle={{height:24, width:24,fill:'#666666'}}></Icon>
                    </div>

                </div> */}
      </div>
    
  );
}
