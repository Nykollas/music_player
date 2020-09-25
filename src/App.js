import React from 'react';

import SideMenu from './components/sidemenu';
import Header from './components/header';
import BillBoardList from './components/billboard_list';
import MostPopular from './components/mostpopular';
import MusicPlayer from './components/musicplayer';
function App() {
    return (
        <div style={{margin:0,flexDirection:'row',display:'flex', backgroundColor:'#FCFDFE'}}>
            <SideMenu></SideMenu>
            <div style={{flexDirection:'column',overflowX:'hidden', flex:1, display:'flex', padding:32}}>
                    <Header></Header>
                    <BillBoardList></BillBoardList>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <MostPopular></MostPopular>
                        <MusicPlayer></MusicPlayer>
                    </div>
            </div>
        </div>
        
    );
}

export default App;