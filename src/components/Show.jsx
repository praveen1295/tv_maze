import React from "react";
import "../App.css";
import Description from "./Description";
import noImage from "./noImage.jfif";

function Show(props) {
  return (
    <React.Fragment>
      {props.showItems.map((item, index) => {
        return (
          <div className="col-md-3 my-4" key={index}>
            <img
              src={item.show.image ? item.show.image.medium : noImage}
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.show.name !== null && item.show.name}{" "}
              </h5>
              <p className="card-text">
                <strong>
                  IMDB rating:{" "}
                  {item.show.rating.value !== null
                    ? item.show.rating.average
                    : "NA"}{" "}
                  &#11088;
                </strong>
                <br />
                <small className="text-muted">
                  Language: {item.show.language && item.show.language}
                  <br />
                  genres: {item.show.genres ? item.show.genres[0] : "unknown"}
                </small>
              </p>
              <div
                className="d-flex"
                style={{ width: "100%", justifyContent: "space-around" }}
              >
                <a className="readMore" href={item.show.url} target="blank">
                  <span>Official site</span>
                </a>
                <Description show={item.show} />
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default React.memo(Show);
