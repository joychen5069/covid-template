import React from "react";
import axios from "axios";
import "./map.css";

export default class CountyDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      deaths: "",
      active: "",
      total: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getData(this.state.value);
  };

  async getData(value) {
    let province = this.props.state.province;
    let res = await axios.get(
      "https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=2020-12-07&state=" + province
    );
    console.log(res.data)
    this.setState({
      deaths: res.data.Deaths,
      active: res.data.Active,
    });
  }

  render() {
    
    return (
      <div>
      
        <div className="countyDataWrapper">
                   <h5>
            Deaths: <span className="dataNumber"> {this.state.deaths} </span>
            &nbsp;&nbsp; &bull; &nbsp;&nbsp;
          </h5>
          <h5>
            Active Cases:{" "}
            <span className="dataNumber"> {this.state.active} </span>
            &nbsp;&nbsp; &bull; &nbsp;&nbsp;
          </h5>
          <h5>
            Total Cases:{" "}
            <span className="dataNumber"> {this.state.active} </span>
          </h5>
        </div>
      </div>
    );
  }
}
