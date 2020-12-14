import React, { Component } from "react";
import "./map.css";
import USAMap from "react-usa-map";

class Map extends Component {
  mapHandler = (event) => {
    const abrv = event.target.dataset.name;
    this.props.province(abrv);
  };

  render() {
    return (
      <>
        <div className="container mapCol row">
          {/* <h5>The USA COVID-19 Summary</h5> */}
          <div className="detail">
            Click on a state map and choose a county from the list below.
          </div>
          <USAMap onClick={this.mapHandler} />
        </div>
      </>
    );
  }
}

export default Map;
