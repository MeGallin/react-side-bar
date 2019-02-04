import React, { Component } from "react";
import Clock from "../../common/clock/Clock";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer className="border-temp">
          Footer
          <Clock />
        </footer>
      </div>
    );
  }
}

export default Footer;
