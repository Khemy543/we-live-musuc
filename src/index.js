/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SrollToTop from "react-router-scroll-top";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";
import LandingPage from "views/LandingPage.js";
import ProfilePage from "views/ProfilePage.js";
import history from "history.js";
import AllArtist from "views/AllArtist";
import MusicPage from "views/MusicPage";

ReactDOM.render(
  <BrowserRouter history={history}>
  <SrollToTop/>
    <Switch>
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/allartist-page"
        render={props => <AllArtist {...props} />}
      /> 
      <Route
        path="/music-page"
        render={props => <MusicPage {...props} />}
      /> 
      <Redirect from="/" to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
