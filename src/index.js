import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import Callback from './pages/callback';
import Suceed from './pages/suceed';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/callback">
       <Callback></Callback>
      </Route>
      <Route path="/suceed">
       <Suceed></Suceed>
      </Route>
      <Route path="/">
        <App></App>
      </Route>
    </Switch>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
