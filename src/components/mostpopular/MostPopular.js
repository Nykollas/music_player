import React from 'react'
import './style.css';

import MostPopularRow from '../mostpopular_row';

export default function MostPopular(props) {

    const { setTrackIndex } = props;
    return (
        <div className='most-popular--container'>
            <p id='most-popular--title'>Most Popular</p>
            <p id='most-popular--songs'>92 Songs</p>
            <div className='most-popular-list--container'>

            
            {props.data.length > 0 ? props.data.map((val, index, arr) => {
                let ms = val.duration_ms;
                let min = Math.floor((ms/1000/60) << 0);
                let sec = Math.floor((ms/1000) % 60);


                return  <MostPopularRow 
                            index={index} 
                            setTrackIndex={setTrackIndex}
                            musicImageUrl={val.album.images[0].url}
                            musicTitle={val.name}
                            musicArtist={val.artists[0].name}
                            musicDuration={min + ':' + sec}></MostPopularRow>
            }):
            <>
            </>
            }
            </div>


        </div>
    )
}
