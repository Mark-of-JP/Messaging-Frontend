import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from "./everglade/core/homepage"
import LoginPage from "./everglade/core/loginPage"
import SignUpPage from "./everglade/core/signUpPage"
import MessagingPage from "./everglade/core/messagingPage"
import WebsocketTest from "./everglade/core/websocketTest"

/**
 * Sets up the routes
 */
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/messaging"> <MessagingPage /> </Route>
          <Route path="/signup"> <SignUpPage /> </Route>
          <Route path="/login"> <LoginPage /> </Route>
          <Route path="/test"> <WebsocketTest /> </Route>
          <Route exact path="/"> <Homepage /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
