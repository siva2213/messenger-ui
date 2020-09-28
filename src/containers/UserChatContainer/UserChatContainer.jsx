import React, { Component } from "react";
import ChatBox from "../../components/ChatContainer/ChatBox";

class UserChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatData: [
        {
          receiver: "Varsha",
          text: "Hi",
        },
        {
          sender: "Siva",
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
