import React, { useState } from "react";

// importing react-router-dom
import { useParams } from "react-router-dom";

// importing Helmet
import { Helmet } from "react-helmet";

// importing logo
import Logo1 from "../Components/images/logo1.png";

// import componenets
import SideVideoCard from "../Components/SideVideoCard";
const SingleVideo = () => {
  let { id } = useParams();
  const [video, setVideo] = useState({});
  const [preview, setPreview] = useState([]);
  fetch(
    `https://www.eporner.com/api/v2/video/id/?id=${id}&thumbsize=medium&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      setVideo(data);
      // setKeywords(data.keywords);
      setPreview(data.thumbs);
    })
    .catch((err) => console.log(err));

  const [sideVideos, setSideVideos] = useState([]);
  fetch(
    "https://www.eporner.com/api/v2/video/search/?query=teen&per_page=10&page=2&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json"
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
      setSideVideos(result);
    })
    .catch((err) => console.log(err));
  return (
    <div className="row">
      <Helmet>
        <meta name="theme-color" content="#222"></meta>
        <title>{`CumTube - ${video.title}`} </title>
        <link rel="shortcut icon" href={Logo1} type="image/x-icon" />
      </Helmet>
      <div className="col-md-8">
        <div className="single-video-left">
          <div className="single-video">
            <iframe
              width="100%"
              height="100%"
              src={video.embed}
              frameBorder="0"
              title={video.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <div className="single-video-title box mb-3">
            <h2>{video.title}</h2>
            <div className="video-view">
              <div>
                <i className="fas fa-eye"></i>
                {video.views} views
              </div>
              <div>
                <i className="fas fa-calendar-alt"></i>
                {video.added}
              </div>
            </div>
          </div>
          <div className="single-video-info-content box mb-3">
            {/* <h6>Tags :</h6>
            <p className="tags mb-0">
              {keywords.map((keyword) => {
                return (
                  <span>
                    <Link to={`tags/${keyword}`}>{keyword}</Link>
                  </span>
                );
              })}
            </p> */}
            <h6>Preview:</h6>
            {preview.map((preview, index) => {
              return (
                <img key={index} src={`${preview.src}`} alt={video.title} />
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="single-video-right">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title">
                <h6>Recemended Videos</h6>
              </div>
            </div>
            <div className="col-md-12">
              {sideVideos.map((video, index) => {
                return (
                  <SideVideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    views={video.views}
                    rate={video.rate}
                    added={video.added}
                    lengthMin={video.lengthMin}
                    thumb={video.thumb}
                    onClick={(e) => (id = null)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
