import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from "./everglade/core/homepage/homepage"
import LoginPage from "./everglade/core/loginPage/loginPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login"> <LoginPage /> </Route>
          <Route path="/"> <Homepage /> </Route>

        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>Eat Nut</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
