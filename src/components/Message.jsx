import React from "react";

const Message = ({ name, text }) => {
  return (
    <div>
      <span>{name}</span>
      <p>{text}</p>
    </div>
  );
};

export default Message;
