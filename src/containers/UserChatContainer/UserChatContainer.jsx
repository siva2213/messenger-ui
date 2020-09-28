import React, { Component } from "react";
import ChatBox from "../../components/ChatContainer/ChatBox";

class UserChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: [
        {
          receiver: "Matt",
          text: "Hi",
        },
        {
          sender: "Shaun",
          text: "Hello!",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div></div>
        <div>
          <ChatBox chatData={this.state.chatData} />
        </div>
        <div></div>
      </div>
    );
  }
}

export default UserChatContainer;
