import React, { Component } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import UserRoutes from "../../routes/userList";

class Unread extends Component {
  onUserSelected = (user) => {
    this.props.history.push(`/messenger/unread`);
    this.props.history.push(`/messenger/unread/${user}`);
  };

  render() {
    return (
      <div>
        {UserRoutes.map((page) => {
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

export default withRouter(Unread);
