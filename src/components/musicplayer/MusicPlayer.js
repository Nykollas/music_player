import React from 'react'
import './style.css';
import Icon from '../icons';


export default function MusicPlayer(props) {
    return (
        <div className='music-player--container'>
            <p id='music-player-section-title'>Now Playing</p>
            <p id='music-player-label'>55 Items on the list</p>
            <div className='music-player--music-card'>
                <div className='music-player--music-info'>
                    <div className='music-player--disc'>
                        <div className='music-player--disc-hole'></div>
                    </div>
                    <p id="music-player-title"> Chance The Rapper</p>
                    <p id='music-player-artist'> Pop King </p>
                    <div className='music-player--music-status'>
                        <input type='range'></input>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <p id='start-time'>00:00</p>
                            <p id='end-time'>3:35</p>
                        </div>
                    </div>
                </div>
                <div className='music-player--buttons'>
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

                </div>
            </div>
        </div>
    )
}
