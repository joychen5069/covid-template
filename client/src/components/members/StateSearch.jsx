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
    let states =[
      ['Arizona', 'AZ'],
      ['Alabama', 'AL'],
      ['Alaska', 'AK'],
      ['Arkansas', 'AR'],
      ['California', 'CA'],
      ['Colorado', 'CO'],
      ['Connecticut', 'CT'],
      ['Washington, D.C.', 'DC'],
      ['Delaware', 'DE'],
      ['Florida', 'FL'],
      ['Georgia', 'GA'],
      ['Hawaii', 'HI'],
      ['Idaho', 'ID'],
      ['Illinois', 'IL'],
      ['Indiana', 'IN'],
      ['Iowa', 'IA'],
      ['Kansas', 'KS'],
      ['Kentucky', 'KY'],
      ['Louisiana', 'LA'],
      ['Maine', 'ME'],
      ['Maryland', 'MD'],
      ['Massachusetts', 'MA'],
      ['Michigan', 'MI'],
      ['Minnesota', 'MN'],
      ['Mississippi', 'MS'],
      ['Missouri', 'MO'],
      ['Montana', 'MT'],
      ['Nebraska', 'NE'],
      ['Nevada', 'NV'],
      ['New Hampshire', 'NH'],
      ['New Jersey', 'NJ'],
      ['New Mexico', 'NM'],
      ['New York', 'NY'],
      ['North Carolina', 'NC'],
      ['North Dakota', 'ND'],
      ['Ohio', 'OH'],
      ['Oklahoma', 'OK'],
      ['Oregon', 'OR'],
      ['Pennsylvania', 'PA'],
      ['Rhode Island', 'RI'],
      ['South Carolina', 'SC'],
      ['South Dakota', 'SD'],
      ['Tennessee', 'TN'],
      ['Texas', 'TX'],
      ['Utah', 'UT'],
      ['Vermont', 'VT'],
      ['Virginia', 'VA'],
      ['Washington', 'WA'],
      ['West Virginia', 'WV'],
      ['Wisconsin', 'WI'],
      ['Wyoming', 'WY'],
    ]
    for (var i = 0; i < states.length; i++) {
      if (states[i][1] === res.data[0].state) {
        this.setState({
          state: states[i][0],
          deaths: res.data[0].tot_death,
          new: Math.floor(res.data[0].new_case),
          total: res.data[0].tot_cases,
        });
      }}
    
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
            State: <span className="stateName">{this.state.state}</span>
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
