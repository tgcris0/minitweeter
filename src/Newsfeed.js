import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Newsfeed = ({ messages }) => {
  return (
    <>
      {messages &&
        messages.map((message, index) => {
          return (
            <div key={message.id} className="card" style={{ width: "100%" }}>
              <img
                className="card-img-top"
                src={message.image_url}
                alt="User profile"
                style={{ width: "4rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/profile/${message.id_user}`}>{message.name}</Link>
                </h5>
                <p className="card-text">{message.text}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Newsfeed;

/* .filter (message=>{ 
  
})*/
