import React, { Component } from "react";
import NavBar from "./components/Layouts/NavBar";
import Footer from "./components/Layouts/Footer";
import LandingPage from "./components/Layouts/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// class App extends Component {
//   render() {
//     return (

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Footer />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/registration" component={Registration} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/search" component={search} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

//     );
//   }
// }

export default App;

//browser

/* <LandingPage /> */

//keep route exact path landing page at top
