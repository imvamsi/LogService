import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const TechItem = ({ tech: { id, firstname, lastname } }) => {
  return (
    <li className="collection-item">
      {firstname} {lastname}
      <a href="#" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default connect(null)(TechItem);
