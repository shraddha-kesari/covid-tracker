import React, { useState, useEffect } from "react";
import { getCovidData } from "../../api";

const Main = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getCovidData().then(data => setData(data));
  }, []);

  if (!data.statewise) return null;

  return (
    <div className="App">
      <h1>India Covid19 Stats</h1>
      <div className="box">
        <h5>Aggregated Confirmed</h5>
        <em>{data.statewise[0].confirmed}</em>
      </div>
      <div className="box">
        <h5>Active Confirmed</h5>
        <em>{data.statewise[0].active}</em>
      </div>
      <div className="box">
        <h5>Active Confirmed</h5>
        <em>{data.statewise[0].recovered}</em>
      </div>
      <div className="box">
        <h5>Active Confirmed</h5>
        <em>{data.statewise[0].deaths}</em>
      </div>
    </div>
  );
};

export { Main };
