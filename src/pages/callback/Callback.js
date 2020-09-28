import React, { useEffect } from "react";

export default function Callback(props) {
  useEffect(() => {
    const url = window.location.search;
    const parameters = url.split("&");
    const params = parameters.map((val) => {
      let keyAndValues = val.split("=");
      return keyAndValues[1];
    });
    const data = {
      code: params[0],
      state: params[1],
    };
    window.opener.postMessage(data, window.location.origin, []);
    window.close();
    
    
  });

  return <div></div>;
}
