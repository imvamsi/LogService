import React, { Fragment, useRef } from "react";
import { connect } from "react-redux";
import { searchLog } from "../../actions/LogActions";
const SearchBar = ({ searchLog }) => {
  const text = useRef("");

  const onChange = e => {
    searchLog(text.current.value);
  };
  return (
    <Fragment>
      <nav className="blue" style={{ marginBottom: "40px" }}>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Enter the logs...."
                ref={text}
                onChange={onChange}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default connect(
  null,
  { searchLog }
)(SearchBar);
