import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTechs } from "../../actions/TechActions";

const TechItem = ({ tech, deleteTechs }) => {
  console.log(tech);
  const onDelete = e => {
    deleteTechs(tech.id);
  };
  return (
    <li className="collection-item">
      {tech.firstname} {tech.lastname}
      <a href="#" className="secondary-content">
        <i className="material-icons grey-text" onClick={onDelete}>
          delete
        </i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteTechs }
)(TechItem);
