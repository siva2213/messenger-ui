import React from "react";
import "./ChatBox.css";

function ChatBox(props) {
  return (
    <div className="chat-box">
      {props.chatData.map((chatter) => {
        return (
          <div>
            {chatter.hasOwnProperty("receiver") ? (
              <div className="receiver">
                <div>{chatter.receiver}</div>
                <div>{chatter.text}</div>
              </div>
            ) : (
              <div className="sender">
                <div>{chatter.sender}</div>
                <div>{chatter.text}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ChatBox;
