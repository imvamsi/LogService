import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layout/AddButton";
import AddLogModal from "./components/logs/AddLogModal";
import "./App.css";

const App = () => {
  useEffect(() => {
    //Initialize Materialize
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
        <AddButton />
        <AddLogModal />
      </div>
    </Fragment>
  );
};

export default App;
