import React from "react";
import "../App.css";

function Show(props) {
  return (
    <React.Fragment>
      {props.showItems.map((item, index) => {
        return (
          <div key={item.show.genres.id}>
            <img src={item.show.image ? item.show.image.medium : ""} alt="" />
            <div className="detail">
              <strong>{item.show.name}</strong>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Show;
