import React, { Component } from "react";
import NavBar from "./components/Layouts/NavBar";
import Home from "./components/Layouts/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />;
        <Home />
      </div>
    );
  }
}

export default App;
