import React from "react";
import "../App.css";
import noImage from "./noImage.jfif";
import DescriptionAllShow from "./DescriptionAllShow";

function AllShow(props) {
  return (
    <React.Fragment>
      {props.showItems.map((item, index) => {
        return (
          <div className="col-md-3 my-4" key={index}>
            <img src={item.image ? item.image.medium : noImage} alt="" />
            <div className="card-body" style={{ margin: "20px 0 0 0" }}>
              <h5 className="card-title">{item.name !== null && item.name} </h5>
              <p className="card-text">
                IMDB rating:{" "}
                {item.rating.value !== null ? item.rating.average : ""} &#11088;
                <br />
                <small className="text-muted">
                  Language: {item.language && item.language}
                  <br />
                  Type: {item.type ? item.type : "unknown"}
                </small>
              </p>
              <div
                className="d-flex"
                style={{ width: "100%", justifyContent: "space-around" }}
              >
                <a
                  className="readMore"
                  href={item.officialSite ? item.officialSite : "NA"}
                  target="blank"
                >
                  <span>Official site</span>
                </a>
                <DescriptionAllShow show={item} />
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default AllShow;
