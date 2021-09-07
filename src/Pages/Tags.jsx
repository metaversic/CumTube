// importing react and react hooks
import React, { useState } from "react";

import { useParams } from "react-router-dom";

// importing Helmet
import { Helmet } from "react-helmet";

// importing logo
// import Logo from "../images/logo-1.png";

// importing components
import VideoCard from "../Components/VideoCard";

const Tags = () => {
  let { tag } = useParams();
  const [videos, setVideos] = useState([]);
  fetch(
    `https://www.eporner.com/api/v2/video/search/&query=${tag}&per_page=10&page=1&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      let result = data.videos.map((video) => {
        return {
          id: video.id,
          title: video.title,
          views: video.views,
          rate: video.rate,
          added: video.added,
          lengthMin: video.length_min,
          thumb: video.default_thumb.src,
        };
      });
      setVideos(result);
    })
    .catch((err) => console.log(err));
  return (
    <div className="row">
      <Helmet>
        <title>{`CumTube | Tag - ${tag}`} </title>
        <meta name="theme-color" content="#222"></meta>
        <link
          rel="shortcut icon"
          href="https://askbootstrap.com/preview/vidoe-v2-3/theme-five/img/logo.png"
          type="image/x-icon"
        />
      </Helmet>
      <div className="col-md-12">
        <div className="main-title">
          <h6>
            Search Results for <b>{tag}</b>
          </h6>
        </div>
      </div>
      {videos.map((video, index) => {
        return (
          <div className="col-xl-3 col-sm-6 mb-3">
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              views={video.views}
              rate={video.rate}
              added={video.added}
              lengthMin={video.lengthMin}
              thumb={video.thumb}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
