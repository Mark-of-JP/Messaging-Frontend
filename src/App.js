import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from "./everglade/core/homepage/homepage"
import LoginPage from "./everglade/core/loginPage/loginPage"
import SignUpPage from "./everglade/core/signUpPage/signUpPage"
import MessagingPage from "./everglade/core/messagingPage/messagingPage"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/messaging"> <MessagingPage /> </Route>
          <Route path="/signup"> <SignUpPage /> </Route>
          <Route path="/login"> <LoginPage /> </Route>
          <Route path="/"> <Homepage /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
