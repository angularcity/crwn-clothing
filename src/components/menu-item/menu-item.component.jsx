//rafce

import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${size} menu-item`}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle"> Shop now </span>
      </div>
    </div>
  );
};
// returns MenuItem with access to location, match, history props.
export default withRouter(MenuItem);
