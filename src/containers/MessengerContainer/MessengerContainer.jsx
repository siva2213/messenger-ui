import React, { Component } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import InboxItems from "../../routes/messengerRoutes";

class Inbox extends Component {
  render() {
    return (
      <div>
        {InboxItems.map((page) => {
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

export default withRouter(Inbox);
