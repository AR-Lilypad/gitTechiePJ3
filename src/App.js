import React, { Component } from "react";
import NavBar from "./components/Layouts/NavBar";
import LandingPage from "./components/Layouts/LandingPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />;
        <LandingPage />
      </div>
    );
  }
}

export default App;
