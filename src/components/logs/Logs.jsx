import React, { useEffect, useState } from "react";

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
    return <h4> Loading...</h4>;
  }
  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">Logs...</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">There are no logs</p>
      ) : (
        logs.map(log => <li key={log.id}>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
