import React from "react";

//React-DOM
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";


const App = () => {

  return (
  <Router>
    <Switch>
      <Mainlayout />
    </ Switch>
  </ Router>
  );
};

export default App;
