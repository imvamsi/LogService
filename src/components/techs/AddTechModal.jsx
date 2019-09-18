import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTechs } from "../../actions/TechActions";
const AddTechModal = ({ addTechs }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const onSubmit = e => {
    if (firstname === "" || lastname === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      addTechs({
        firstname,
        lastname
      });
    }
    console.log(firstname, lastname);
    setFirstName("");
    setLastName("");
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstname" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="firstname" className="active">
              Last Name
            </label>
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

export default connect(
  null,
  { addTechs }
)(AddTechModal);
