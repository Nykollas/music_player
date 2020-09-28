import React from 'react'
import './style.css';
import SideMenuOption from '../sidemenu_option';
import Profile from '../../components/profile';
import pallete from '../../assets/colors';
function SideMenu(props) {
    return (
        <div style={props} className='sidemenu'>
            <div className='sidemenu--header'>
                <Profile ></Profile>
            </div>
            <div className='sidemenu--options_container'>
                    <SideMenuOption iconStyle={{height:24, width:24, fill:pallete.font_light_gray}} iconName="home" label="Home"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24, fill:pallete.font_light_gray}} iconName="layout" label="Browse"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24, fill:pallete.font_light_gray}} iconName="album" label="Album"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24, fill:pallete.font_light_gray}} iconName="artist" label="Artists"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24, fill:pallete.font_light_gray}} iconName="videos" label="Videos"></SideMenuOption>

            </div>
            <p className='sidemenu--options_title'>My Music</p>
            <div className='sidemenu--options_container'>
                    <SideMenuOption iconStyle={{height:24, width:24, fill:pallete.font_light_gray}} iconName="clock" label="Recently Played"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24, fill:pallete.font_light_gray}} iconName="localfiles" label="Local Files"></SideMenuOption>
            </div>
            <div className="sidemenu--options_footer">

            </div>
        </div>
    )
}


export default SideMenu

