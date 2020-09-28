import React from 'react'
import * as Icons from '../../assets/icons' ;
console.log(Icons);
export default function Icon(props) {

    const { iconStyle, name } = props;

   let iconNameArr = name.split('-');
   let iconNameArrFmted = iconNameArr.map(string => {
       return string.charAt(0).toUpperCase() + string.slice(1);
   })
  
   const cmpName = iconNameArrFmted.join("");

   const IconComponent  = Icons[cmpName];
    return (
        <IconComponent style={iconStyle}></IconComponent>
    )
}
