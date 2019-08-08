//rcc
import React, { Component } from "react";
// HOC is a function that takes a component as an argument
// and returns us a modified component

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirSections } from "./directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirSections
});

export default connect(
  mapStateToProps,
  null
)(Directory);
