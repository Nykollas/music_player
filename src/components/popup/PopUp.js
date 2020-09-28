import React from 'react';
import './style.css';

export default function PopUp(props) {

        console.log('Carregado');
        return <div className='pop-up--container' dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}></div>

}
