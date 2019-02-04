import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  state = {
    showing: false,
    buttonText: "x"
  };

  toggleSide = () => {
    this.setState({
      showing: !this.state.showing,
      buttonText: "X"
    });

    this.state.showing
      ? this.setState({
          buttonText: "+"
        })
      : this.setState({
          buttonText: "X"
        });

    // if(this.state.showing){
    //     this.setState({
    //                 buttonText: 'open'
    //     })
    // }
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.toggleSide}>{this.state.buttonText}</button>
        {this.state.showing ? (
          <div className="animated slideInLeft">
            <div className="side_menu">
              <div className="grid_container">
                <div className="grid_item">MotoGP</div>
                <div className="grid_item">WRC</div>
                <div className="grid_item">WSK</div>
                <div className="grid_item">WSK</div>
                <div className="grid_item">MotoGP</div>
                <div className="grid_item">WRC</div>
                <div className="grid_item">WSK</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animated slideOutLeft">
            <div className="side_menu">
              <div className="grid_container">
                <div className="grid_item">MotoGP</div>
                <div className="grid_item">WRC</div>
                <div className="grid_item">WSK</div>
                <div className="grid_item">MotoGP</div>
                <div className="grid_item">WRC</div>
                <div className="grid_item">WSK</div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="search_position">Other Motor Racing News</div>
        <nav>
          <div className="animated slideInRight side_menu">
            <div className="grid_container">
              <div className="grid_item">MotoGP</div>
              <div className="grid_item">WRC</div>
              <div className="grid_item">WSK</div>
            </div>
          </div>
        </nav> */}
      </React.Fragment>
    );
  }
}

export default SideBar;
