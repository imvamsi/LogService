import React, { useEffect, useState } from "react";
import LogItem from "./LogItem";
import PreLoader from "../layout/PreLoader";
const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
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

export default Logs;
