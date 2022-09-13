import React from "react";
import "../App.css";

function Actor(props) {
  console.log(props.actorItems);
  return (
    <React.Fragment>
      {props.showItems.map((item, index) => {
        return (
          <div key={item.person.genres.id}>
            <img src={item.show.image ? item.show.image.medium : ""} alt="" />
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Actor;
