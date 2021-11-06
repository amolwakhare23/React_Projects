import React, { useEffect, useState } from 'react';
import './Covid.css';

const Covid = () => {
    const [data, setData] = useState([]);

    const api_data = async () => {
        const res_api = await fetch("https://data.covid19india.org/data.json");
        const real_api = await res_api.json();
        console.log(real_api.statewise[21]);
        setData(real_api.statewise[21]);
    }

    useEffect(() => {

        api_data();

    }, [])


    return (
        <>
            <div className="header">
                <h4>Project On React-JS</h4>
                
            </div>

            <h1>Live</h1>
            <h2>Covid-19 Corona-Virus Tracker</h2>

            <div id="india">
                <h3>Total Cases In<br /><span>Country</span></h3>
            </div>

            <div className="corona">
                <ul>
                    <li className="active">Total Active Cases<br /><span>{data.active}</span></li>
                    <li className="confirm">Total Confirmed Cases<br /><span>{data.confirmed}</span></li>
                    <li className="death">Total Deaths<br /><span>{data.deaths}</span></li>
                    <li className="delta">Total Delta Confirmed Cases<br /><span>{data.deltaconfirmed}</span></li>
                    <li className="recover">Total Recovered<br /><span>{data.recovered}</span></li>
                    <li className="state">State &amp;StateCode<br />
                        <span>{data.state} and {data.statecode}</span>
                    </li>
                </ul>
            </div>

            <div className="update">
            <ul>
                <li>Total last Update<br/>
                <span>{data.lastupdatedtime}</span></li>
            </ul>
            </div>

        </>
            )
}

            export default Covid;
