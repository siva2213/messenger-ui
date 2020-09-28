import React, { Component } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import AppRoutes from "../../routes/appRoutes";

class AppContainer extends Component {
  render() {
    return (
      <div>
        {AppRoutes.map((page) => {
          return (
            <NavLink
              key={page.name}
              to={page.path}
              activeStyle={{
                background: "#424242",
              }}
              style={{ display: "block", padding: "0.5rem", color: "white" }}
            >
              {page.name}
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default withRouter(AppContainer);
