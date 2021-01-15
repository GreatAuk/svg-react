import * as React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Room from "./pages/Room";
import LineAnimation from "./pages/lineAnimation";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/lineAnimation">
            <LineAnimation />
          </Route>
          <Route path="/room">
            <Room />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
