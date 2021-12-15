import React, { useState, useEffect, useContext } from "react";
import {
  LoginContext,
  DialogueContext,
  ChatContext,
} from "./../../Context/context";
import "./chatBoxStyles.css";
import io from "socket.io-client";

function ChatBox(props) {
  const socket = io.connect("http://localhost:3000");
  const { id, setID } = useContext(ChatContext);

  const { userInfo, setUserInfo } = useContext(LoginContext);
  const [show, setShow] = useState(props.connectSocket);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const Clicker = (e) => {
    const target = e.target;

    if (target.value === "") {
      target.removeAttribute("good", "");
    } else {
      target.setAttribute("good", "");
    }
  };

  const Submit = async (e) => {
    e.preventDefault();

    if (currentMessage !== "") {
      const messageData = {
        sender: userInfo.id,
        receiver: id,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log(messageData);

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    } else {
      alert(
        "Message is Empty. Can not send a message that ISNT a message, dummy"
      );
    }
  };

  return (
    <div className="chatbox">
      <div className="chat-window">
        <article className="msg-container msg-remote" id="msg-0">
          {messageList.map((item) => {
            return (
              <div className="msg-box">
                <img
                  className="user-img"
                  id="user-0"
                  src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro"
                />
                <div className="flr">
                  <div className="messages">
                    <p className="msg" id="msg-0">
                      {item.message}
                    </p>
                    <span className="timestamp">
                      <span className="username">Name</span>&bull;
                      <span className="posttime">3 minutes ago</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </div>
      <form className="chat-input ">
        <input
          value={currentMessage}
          className="good"
          onChange={(e) => {
            setCurrentMessage(e.target.value);
            Clicker(e);
          }}
          type="text"
          autoComplete="on"
          placeholder="Type a message"
        />
        <button onClick={Submit} className="test">
          <svg
            //   style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="rgba(0,0,0,.38)"
              d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
export default ChatBox;
