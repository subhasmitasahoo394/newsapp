import React from 'react';

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card position-relative">
        {/* Source Badge */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0',
          top: '0',
          margin: '5px',
          zIndex: 1
        }}>
          <span className="badge rounded-pill bg-danger">{source || "Unknown"}</span>
        </div>

        {/* News Image */}
        <img
          src={imageUrl || "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iq.TYFPgivI4/v0/1200x800.jpg"}
          className="card-img-top"
          alt={title || "News image"}
        />

        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title">{title || "No Title"}</h5>
          <p className="card-text">{description || "No Description Available"}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author || "Unknown"} on {date ? new Date(date).toGMTString() : "Date not available"}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
