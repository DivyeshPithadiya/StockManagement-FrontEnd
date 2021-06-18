import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigation.js";
import Login from "./components/login.js";
import Users from "./components/users.js";
import { Route, Switch } from "react-router-dom";
import Transaction from "./components/Transaction.js";
import UserDetails from "./components/UserDetails.js";
import Home from "./components/home.js";
import { Segment } from "semantic-ui-react";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/users">
          {Users}
        </Route>
        <Route exact path="/transaction">
          {Transaction}
        </Route>
        <Route exact path="/details">
          {UserDetails}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
