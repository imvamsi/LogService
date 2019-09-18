import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteLog } from "../../actions/LogActions";

const LogItem = ({ log, deleteLog }) => {
  const onDelete = () => {
    deleteLog(log.id);
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention === "true" ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on {""}
          <Moment format="MMMM Do YYYY, h:mm:ss a" />
          <a href="#" className="secondary-content" onClick={onDelete}>
            <i className="material-icons grey-text">delete</i>
          </a>
        </span>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteLog }
)(LogItem);
