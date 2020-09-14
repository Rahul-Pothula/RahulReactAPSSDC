import React from "react";
import { Link } from "react-router-dom";

import "./card.style.scss";

const Card = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div className="card text-center">
      <div className="overflow">
        <img
          src={`https://robohash.org/${name}`}
          alt="Profile Image 1"
          className="card-img-top"
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-body-title">{name}</h4>
        <p className="card-body-text text-secondary">{email}</p>
        <Link to={"/resume/" + id} className="btn btn-outline-success">
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Card;
