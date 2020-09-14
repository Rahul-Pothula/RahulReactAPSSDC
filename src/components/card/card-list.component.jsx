import React from "react";
import Card from "./card.component";

// import img1 from "../../assets/male_profile_icon.jpg";
// import img2 from "../../assets/male_profile_icon_1.jpg";

const CardList = ({ users }) => {
  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <div className="col">
            <Card user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
