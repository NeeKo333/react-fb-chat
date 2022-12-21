import React from "react";

const Message = ({ name, text, className, time }) => {
  return (
    <div className={className}>
      <span className="msgName">{name}</span>
      <span className="msgText">{text}</span>
      <span className="msgTime">{time}</span>
    </div>
  );
};

export default Message;
