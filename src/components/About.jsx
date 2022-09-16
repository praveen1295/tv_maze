import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  // })
  let myStyle = {
    color: "white",
    backgroundColor: "rgb(36 74 104)",
    boxSizing: "border-box",
  };

  return (
    <div className="container">
      <h1 className="my-3" style={{ color: "white" }}>
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>What is TVmaze? </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TVMaze is a community of TV fanatics and dedicated contributors.
              The site provides several tools to its users. Summary of main site
              features. Personal tv calendar and tv schedule Custom watchlist
              Personal statistics on watched shows and episodes. Show
              information Show relations Tagging system to sort your shows.
              Episode information and trailers Cast and Character information
              For developers there is also a TV API that allows you to use all
              the tv data on the site as you see fit. No fee, no limitation on
              the amount of calls made.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Features </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <h5>Team Collaboration Tools </h5>
              <br />
              Using the right collaboration tools is necessary for almost any
              task, especially in more complex projects with several
              stakeholders. Allowing the team to communicate on one platform
              makes it possible to cut down on long meetings and those
              never-ending email threads. Here we have gathered the most popular
              collaboration software available – everything rated and reviewed
              by our users. Think about what features you need: A messaging app,
              workflow-management features, opportunity to share files and
              screenshots or perhaps something completely different. Whatever
              communication and collaboration needs your team has, chances are
              that the solutions are found in our list of apps.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>TVmaze Alternatives </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TVmaze is described as 'A TV database that provides a wide variety
              of tools to manage your favorite shows' and is a Episode Tracker
              in the video & movies category. There are more than 50
              alternatives to TVmaze for a variety of platforms, including
              Online / Web-based, Android, iPhone, iPad and Android Tablet. The
              best alternative is IMDb, which is free. Other great apps like
              TVmaze are Trakt.tv, The Movie Database , Simkl and TheTVDB.com.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
