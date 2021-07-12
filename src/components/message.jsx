import React from "react";

// const Message = (props) => {
//   const { author, content, created_at } = props.message;
//   const time = new Date(created_at).toLocaleTimeString();

//   return (
//     <div className="">
//       <i className="author">
//         <h2>{author}</h2>
//         <small>{time}</small>
//       </i>
//       <p>{content}</p>
//     </div>
//   );

// }

const Message = (props) => {
  const { created_at, author, content } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span >{author}</span>
        <small>{time}</small>
      </i>
      <p>{content}</p>
    </div>
  );
};

export default Message;
