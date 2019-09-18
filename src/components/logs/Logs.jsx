import React, { useEffect } from "react";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
import { connect } from "react-redux";
import { getLogs } from "../../actions/LogActions";
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Logs...</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">There are no logs</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
