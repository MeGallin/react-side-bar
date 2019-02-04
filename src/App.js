import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div id="site-wrapper">
        <Header />
        <div className="d-flex">
          <div>side Menus</div>
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
