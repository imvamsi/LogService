import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/TechActions";

const TechListOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstname} ${t.lastname}`}>
        {t.firstname}
        {t.lastname}
      </option>
    ))
  );
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechListOptions);
