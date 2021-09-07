import React, { useState } from "react";

// importing apis
// import { requests, IMG_PATH } from "../request";

// importing Helmet
import { Helmet } from "react-helmet";

// importing video card
import VideoCard from "../Components/VideoCard";

// importing logo
import Logo1 from "../Components/images/logo1.png";

const Home = () => {
  // const [pageNum, setPageNum] = useState(1);
  const [videos, setVideos] = useState([]);
  fetch(
    `https://www.eporner.com/api/v2/video/search/&per_page=10&page=${1}&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      // const result = data.results.map((results) => {
      //   return {
      //     id: results.id,
      //     posterUrl: `${IMG_PATH}${results.backdrop_path}`,
      //     title: results.title,
      //     rating: results.vote_average,
      //   };
      // });
      // result.length = 5;
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
      // console.log(data.results);
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <div className="video-block section-padding">
      <Helmet>
        <title>CumTube | Home</title>
        <meta name="theme-color" content="#222"></meta>
        <link rel="shortcut icon" href={Logo1} type="image/x-icon" />
      </Helmet>
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <h6>Featured Videos</h6>
          </div>
        </div>
        {videos.map((video) => {
          return (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              views={video.views}
              rate={video.rate}
              added={video.added}
              lengthMin={video.lengthMin}
              // thumb="https://askbootstrap.com/preview/vidoe-v2-3/theme-five/img/v2.png"
              thumb={video.thumb}
            />
          );
        })}
        {/* <VideoCard
          id="asfsa"
          title="Hello World"
          thumb="https://askbootstrap.com/preview/vidoe-v2-3/theme-five/img/v2.png"
          views="65465465"
          addedAt="654465"
        /> */}
      </div>

      {/* <nav>
        <ul className="pagination justify-content-center pagination-sm mb-0">
          <li className="page-item disabled">
            <a tabIndex="-1" href="#" className="page-link">
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a href="#" className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item" onClick={(e) => setPageNum(pageNum + 1)}>
              3
          </li>
          <li className="page-item" onClick={(e) => setPageNum(pageNum + 1)}>
            Next
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Home;
