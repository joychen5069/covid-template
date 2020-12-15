import React from 'react';
import './Current.css';
import axios from "axios";

export default class CurrentData extends React.Component {
    state = {
        data: []
    }

    date = new Date().getDate() - 1;
    month = new Date().getMonth() + 1;
    year = new Date().getFullYear();



    componentDidMount() {
        axios.get("https://api.covidtracking.com/v1/us/current.json")
            .then(res => {
                console.log(res.data[0]);
                this.setState({ data: res.data[0] })
            })
    }

    render() {
        return (
            <>
                <div className="container row dataCol">
                    <div className="col-sm-12 col-md-12" id="test">
                        <h5 className="dataTitle">US Testing Data</h5>
                        <p>Total Tests: {Math.floor(this.state.data.totalTestResults).toLocaleString()}</p>
                        <p>Positive Tests: {Math.floor(this.state.data.positive).toLocaleString()}</p>
                        <p>Negative Tests: {Math.floor(this.state.data.negative).toLocaleString()}</p>
                    </div>
                    <div className="col-sm-12 col-md-12" id="currentOne">
                        <h5 className="dataTitle">Current US Data</h5>
                        <p>Current Hospitalized: {Math.floor(this.state.data.hospitalizedCurrently).toLocaleString()}</p>
                        <p>Current ICU: {Math.floor(this.state.data.inIcuCurrently).toLocaleString()}</p>
                        <p>Current Ventailator: {Math.floor(this.state.data.onVentilatorCurrently).toLocaleString()}</p>
                    </div>
                    <div className="col-sm-12 col-md-12" id="cummulativeOne">
                        <h5 className="dataTitle">Cummulative US Data</h5>
                        <p>Total Deaths: {Math.floor(this.state.data.death).toLocaleString()}</p>
                        <p>Total Hospitalized: {Math.floor(this.state.data.hospitalizedCumulative).toLocaleString()}</p>
                        <p>Total Recovered: {Math.floor(this.state.data.recovered).toLocaleString()}</p>
                    </div>
                    <p className="disclosure">Disclosure: All data is sourced from The COVID Tracking Project and is up-to-date as of {this.month}/{this.date}/{this.year}. Please note that not all testing is reported and numbers may slightly vary from CDC data. </p>
                </div>
            </>
        )
    }
}