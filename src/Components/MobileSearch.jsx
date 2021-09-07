import React, { useState, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";

const MobileSearch = () => {
  const history = useHistory();

  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.eporner.com/api/v2/video/search/?query=${query}&per_page=10&page=1&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        let results = data.videos.map((video) => {
          return {
            id: video.id,
            title: video.title,
          };
        });
        setResult(results);
      })
      .catch((err) => console.log(err));
  }, [query]);
  return (
    <div className="top-mobile-search">
      <div className="row">
        <div className="col-md-12">
          <form
            className="mobile-search"
            onSubmit={(e) => {
              e.preventDefault();
              if (query !== "") history.push(`/search/${query}`);
              setQuery("");
            }}
          >
            <div className="input-group">
              <input
                type="text"
                placeholder="Search for..."
                className="form-control"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-dark">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            {query === "" ? (
              ""
            ) : (
              <ul className="search-list">
                <h6>Searching for {query}</h6>
                {result.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="desktop-search-item"
                      onClick={(e) => {
                        setQuery("");
                      }}
                    >
                      <Link to={`/videos/${item.id}`}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
