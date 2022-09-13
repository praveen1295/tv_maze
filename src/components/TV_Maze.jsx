import React, { useState, useEffect } from "react";
import Actor from "./Actor";
import Show from "./Show";

function TV_Maze() {
  const [showList, setShowList] = useState([]);
  const [show, setShow] = useState(false);
  const [actor, setActor] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getData = async () => {
    const url = `https://api.tvmaze.com/search/shows?q=${searchValue}`;
    const response = await fetch(url);
    const data = await response.json();
    setShowList(data);
  };

  useEffect(() => {
    getData();
  }, [searchValue]);

  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setSearchValue(value);
  };

  const showSearchByRadioInput = (e) => {
    let value = e.target.value;
    console.log(value);
    if (value === "Show") {
      setActor(false);
      setShow(true);
    } else if (value === "Actor") {
      setShow(false);
      setActor(true);
    }
  };

  return (
    <div>
      <h1 style={{ color: "orange", fontSize: "51px" }}>TV MAZE</h1>
      <h1>Search Your Favorite Shows</h1>
      <br />

      <input
        type="radio"
        value="Actor"
        name="searchType"
        onClick={showSearchByRadioInput}
      />
      <label htmlFor="searchType">Actor</label>
      <input
        type="radio"
        value="Show"
        name="searchType"
        onClick={showSearchByRadioInput}
      />
      <label htmlFor="searchType">Show</label>
      <br />
      <input type="search" name="searchBox" onChange={(e) => handleSearch(e)} />

      <div id="shows">
        {show && (searchValue === "friends" || searchValue === "girls") ? (
          <Show showItems={showList} />
        ) : (
          actor &&
          searchValue === showList.person.name && <Actor showItems={showList} />
        )}

        {console.log(show, actor, searchValue)}
      </div>
    </div>
  );
}

export default TV_Maze;
