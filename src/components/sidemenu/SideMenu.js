import React from 'react'
import './style.css';
import SideMenuOption from '../sidemenu_option';
import Profile from '../../components/profile';
function SideMenu(props) {
    return (
        <div className='sidemenu'>
            <div className='sidemenu--header'>
                <Profile ></Profile>
            </div>
            <div className='sidemenu--options_container'>
                    <SideMenuOption iconStyle={{height:24, width:24,fill:'#000', viewBox:'0 0 512 512'}} iconName="home" label="Home"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24,fill:'#000', viewBox:'0 0 512 512'}} iconName="home" label="Home"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24,fill:'#000', viewBox:'0 0 512 512'}} iconName="home" label="Home"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24,fill:'#000', viewBox:'0 0 512 512'}} iconName="home" label="Home"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24,fill:'#000', viewBox:'0 0 512 512'}} iconName="home" label="Home"></SideMenuOption>

            </div>
            <p className='sidemenu--options_title'>My Music</p>
            <div className='sidemenu--options_container'>
            <SideMenuOption iconStyle={{height:24, width:24,fill:'#000', viewBox:'0 0 512 512'}} iconName="home" label="Home"></SideMenuOption>
                    <SideMenuOption iconStyle={{height:24, width:24,fill:'#000', viewBox:'0 0 512 512'}} iconName="home" label="Home"></SideMenuOption>
            </div>
            <div className="sidemenu--options_footer">
                <div className="sidemenu--info">

                </div>
            </div>
        </div>
    )
}


export default SideMenu

