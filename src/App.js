import React, { useState, useEffect } from "react";

import SideMenu from "./components/sidemenu";
import Header from "./components/header";
import BillBoardList from "./components/billboard_list";
import MostPopular from "./components/mostpopular";
import MusicPlayer from "./components/musicplayer";

import config from "./config";

function App() {
  const [isMouseDown, setMouseDown] = useState(false);
  const [trackSelectedIndex, setTrackSelectedItem ] = useState(0);
  const [tracksData, setTracksData] = useState(new Array());

  const [accessToken, setAccessToken] = useState("");
  const mostPopular = (accessToken) => {
    const url = "https://api.spotify.com/v1/search?q=techno&type=track";
    const requestConfig = {
      headers: new Headers({ Authorization: "Bearer " + accessToken }),
    };
    fetch(url, requestConfig).then((res) => {
      res.json().then((response) => {
          console.log(response.tracks.items);
        setTracksData(response.tracks.items);
      });
    });
  };

  const getAccessToken = (event) => {
    if (event.origin == "http://localhost:3000") {
      const data = event.data;
      const url = "https://accounts.spotify.com/api/token";

      const grant_type = "grant_type=authorization_code&";
      const code = "code=" + data.code + "&";
      const redirecturi = "redirect_uri=http://localhost:3000/callback&";
      const scope = 'scope=streaming,user-read-currently-playing,user-read-playback-state,app-remote-control&';
      const client_id = "client_id=" + config.client_id + "&";
      const client_secret = "client_secret=" + config.client_secret + "&";
      const requestConfig = {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: grant_type + code + redirecturi + scope + client_secret + client_id,
      };
      fetch(url, requestConfig).then((res) => {
        res
          .json()
          .then((response) => {
              
            mostPopular(response.access_token);
            return response.access_token;
          }).then((access_token) => {
              
                setAccessToken(access_token)
          })
      });
    }
  };

  const onMouseMove = (event) => {
    const billboardList = document.getElementsByClassName(
      "billboard-list--row"
    )[0];
    if (isMouseDown) {
      billboardList.scrollLeft -= event.movementX;
    }
  };
  useEffect(() => {
    const url = "https://accounts.spotify.com/authorize?";
    const clientid = "client_id=" + config.client_id + "&";
    const responsetype = "response_type=code&";
    const redirecturi = "redirect_uri=http://localhost:3000/callback&";
    const scope = 'scope=user-read-email%20user-read-private%20streaming%20user-read-currently-playing%20user-read-playback-state%20app-remote-control&';
    const state = "state=34fFs29kd09";

    if (accessToken == "") {
      window.open(
        url + clientid + responsetype + scope + redirecturi + scope + state,
        "Login",
        "height=600px,width=350px"
      );
    }
    window.addEventListener("message", getAccessToken, false);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        flexDirection: "row",
        display: "flex",
        height: "100vh",
        backgroundColor: "#FCFDFE",
      }}
    >
      <SideMenu></SideMenu>

      <div
        style={{
          flexDirection: "column",
          overflowX: "hidden",
          flex: 8,
          display: "flex",
          padding: 32,
        }}
      >
        <Header></Header>
        <BillBoardList
        setTrackIndex={setTrackSelectedItem}
          data={tracksData}
          onMouseDown={() => {
            setMouseDown(true);
          }}
          onMouseMove={onMouseMove}
          onMouseUp={() => {
            setMouseDown(false);
          }}
          onMouseLeave={() => {
            setMouseDown(false);
          }}
        ></BillBoardList>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MostPopular setTrackIndex={setTrackSelectedItem} data={tracksData}></MostPopular>
          <MusicPlayer
            
            data={tracksData}
            token={accessToken}
            trackSelectedIndex={trackSelectedIndex}
          ></MusicPlayer>
        </div>
      </div>
    </div>
  );
}

export default App;
