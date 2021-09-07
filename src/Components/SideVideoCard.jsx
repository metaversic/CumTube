import React from "react";

import { Link } from "react-router-dom";

const SideVideoCard = ({ id, title, thumb, lengthMin, views, added }) => {
  return (
    <div className="col-12 mb-3">
      <div className="video-card">
        <div className="video-card-image">
          <Link className="play-icon" to={`/videos/${id}`}>
            <i className="fas fa-play-circle"></i>
          </Link>
          <Link to={`/videos/${id}`}>
            <img className="img-fluid" src={thumb} alt={title} />
          </Link>
          <div className="time">{lengthMin}</div>
        </div>
        <div className="video-card-body">
          <div className="video-title">
            <Link to={`/videos/${id}`}>{title}</Link>
          </div>
          <div className="video-view">
            <div>{views} views</div>
            <div>
              <i className="fas fa-calendar-alt"></i>
              {added}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideVideoCard;
