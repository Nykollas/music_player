import React from "react";
import './style.css';
export default function Profile(props) {
  return (
    <div className="profile--container">
      <div className="profile--picture-container">
        <img src="https://i.pinimg.com/474x/b1/b5/07/b1b5076512d73e8aef49185e09b3252d.jpg"></img>
      </div>
      <p id="name">Nome </p>
      <p id="email">Email</p>
    </div>
  );
}
