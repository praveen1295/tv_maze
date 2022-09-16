import React from "react";
import "../App.css";
import noImage from "./noImage.jfif";

function Actor(props) {
  return (
    <React.Fragment>
      {props.showItems.map((item, index) => {
        return (
          <div className="col-md-3 my-4" key={index}>
            <img
              src={
                item.person.image !== null ? item.person.image.medium : noImage
              }
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.person.name !== null && item.person.name}{" "}
              </h5>
              <p className="card-text">
                {/* <strong>
                  IMDB rating:{" "}
                  {item.show.rating.value !== null
                    ? item.show.rating.average
                    : "NA"}{" "}
                  &#11088;
                </strong> */}
                {/* <br /> */}
                <small className="text-muted">
                  {/* Language: {item.show.language && item.show.language} */}
                  <br />
                  country:{" "}
                  {item.person.country ? item.person.country.name : "unknown"}
                </small>
              </p>
              <a
                href={item.person.url}
                target="blank"
                className="btn btn-sm btn-primary"
              >
                Read more...
              </a>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Actor;
