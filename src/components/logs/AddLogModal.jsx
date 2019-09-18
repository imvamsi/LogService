import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import TechListOptions from "../techs/TechListOptions";
import { addLogs } from "../../actions/LogActions";
import { connect } from "react-redux";
const AddLogModal = ({ addLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = e => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter message and tech" });
    } else {
      const newLogs = {
        message,
        attention,
        tech,
        date: Date.now()
      };
      addLogs(newLogs);
    }
    M.toast({ html: `Log added by ${tech}` });

    //clearFields
    setMessage("");
    setAttention(false);
    setTech("");
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter the system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechListOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-light btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default connect(
  null,
  { addLogs }
)(AddLogModal);
