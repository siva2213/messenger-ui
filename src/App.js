import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import RoutesDetails from "./routes/messengerRoutes";
import UserRoutes from "./routes/userList";
import Inbox from "./containers/MessengerContainer/MessengerContainer";
import AppContainer from "./containers/AppContainer/AppContainer";
import UserChatContainer from "./containers/UserChatContainer/UserChatContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-flex">
        <Router>
          <div className="inner-container">
            <Route component={AppContainer} path="/"></Route>
          </div>
          <div className="inner-container">
            <Route component={Inbox} path="/messenger"></Route>
          </div>
          <div className="inner-container">
            {RoutesDetails.map((route) => {
              return (
                <div key={route.name}>
                  <Switch>
                    <Route {...route}></Route>
                  </Switch>
                </div>
              );
            })}
          </div>
          <div className="inner-container">
            {UserRoutes.map((route) => {
              return (
                <div key={route.name}>
                  <Switch>
                    <Route {...route}></Route>
                  </Switch>
                </div>
              );
            })}
          </div>
          <div className="inner-container">
            <Route
              component={UserChatContainer}
              path="/messenger/unread/:name?"
            ></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
