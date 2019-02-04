import React, { Component } from "react";
import SideBar from "../side-bar/SideBar";
class Header extends Component {
  state = {};
  render() {
    return (
      <header className="border-temp">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col">Header content</div>
        </div>
      </header>
    );
  }
}

export default Header;
