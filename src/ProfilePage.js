import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useParams } from "react-router-dom";

const ProfilePage = ({ users, messages, match, history }) => {
  // here map the image and name/username of the user

  const userId = match.params.id_user;

  return (
    <>
      {messages &&
        messages
          .filter((message) => parseInt(userId) === message.id_user)
          .map((user) => {
            return (
              <div className="displayUser" key={user.id}>
                <img
                  className="userImg"
                  src={user.img_url}
                  alt={user.name}
                  style={{ width: 35, height: 45 }}
                />
                <h2 className="userName">{user.name}</h2>
                <p className="contact">{user.email} </p>
              </div>
            );
          })}
    </>
  );
};

export default ProfilePage;
