import React from "react";
import axios from "axios";
import Map from "./Map";
import "./map.css";

export default class StateSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      state:"",
      province: "",
      deaths: "",
      new: "",
      total: "",
    };
  }

  async getProvince(province) {
    console.log(province, 'state')
    let res = await axios.get(
      "https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=2020-12-07&state=" +
        province
    );
    console.log(res.data[0]);
    this.setState({
      state: res.data[0].state,
      deaths: res.data[0].tot_death,
      new: res.data[0].new_case,
      total: res.data[0].tot_cases,
    });
  }

  provinceCallback = (province) => {
    this.setState({
      province: province,
    });
    this.getProvince(province);
  };

  render() {
    return (
      <>
        <div className="mapWrapper">
          <Map province={this.provinceCallback}/>
        </div>
        <div className="col-sm-12 stateApiCallWrapper">
          <h5 className="stateDataText">
            State: <span className="stateName">{this.state.province}</span>
          </h5>
          <div className="countyDataWrapper">
            <h5>
              Deaths: <span className="dataNumber"> {this.state.deaths} </span>
              &nbsp;&nbsp; &bull; &nbsp;&nbsp;
            </h5>
            <h5>
              New Cases:{" "}
              <span className="dataNumber"> {this.state.new} </span>
              &nbsp;&nbsp; &bull; &nbsp;&nbsp;
            </h5>
            <h5>
              Total Cases:{" "}
              <span className="dataNumber"> {this.state.total} </span>
            </h5>
          </div>
        </div>
      </>
    );
  }
}
