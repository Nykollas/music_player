import React from 'react'
import './style.css';

import BillBoardMusic from '../billboard_music';
export default function BillBoardList(props) {
    return (
        <div className='billboard-list--container'>
            <p id='billboard-list--title'>Billboard Topchart</p>
            <div  className='billboard-list--row'>
                <BillBoardMusic musicImage='https://i.pinimg.com/originals/5b/30/cf/5b30cfffef3f5a05460f73d8557d780e.jpg'  
                                title='Coloring Book'
                                artist='Pop King' ></BillBoardMusic>
                <BillBoardMusic musicImage='https://i.pinimg.com/originals/5b/30/cf/5b30cfffef3f5a05460f73d8557d780e.jpg'  
                                title='Coloring Book'
                                artist='Pop King' ></BillBoardMusic>
                <BillBoardMusic musicImage='https://i.pinimg.com/originals/5b/30/cf/5b30cfffef3f5a05460f73d8557d780e.jpg'  
                                title='Coloring Book'
                                artist='Pop King' ></BillBoardMusic>
                <BillBoardMusic musicImage='https://i.pinimg.com/originals/5b/30/cf/5b30cfffef3f5a05460f73d8557d780e.jpg'  
                                title='Coloring Book'
                                artist='Pop King' ></BillBoardMusic>
                <BillBoardMusic musicImage='https://i.pinimg.com/originals/5b/30/cf/5b30cfffef3f5a05460f73d8557d780e.jpg'  
                                title='Coloring Book'
                                artist='Pop King' ></BillBoardMusic>
            </div>
        </div>
    )
}
