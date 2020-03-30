import React, { useState, useEffect } from "react";
import { getCovidData } from "../../api";
import { Box } from "../box/box";
import "./main.css";
const Main = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getCovidData().then(data => setData(data));
  }, []);

  if (!data.statewise) return null;

  return (
    <div className="tracker-wrapper">
      <h1 className="heading">India Covid19 Stats</h1>
      <Box
        title="Aggregated Confirmed"
        count={data.statewise[0].confirmed}
        countColor="red"
      />
      <Box
        title="Active Confirmed"
        count={data.statewise[0].active}
        countColor="orange"
      />
      <Box
        title="Recovered"
        count={data.statewise[0].recovered}
        countColor="green"
      />
      <Box
        title="Deaths"
        count={data.statewise[0].deaths}
        countColor="purple"
      />
    </div>
  );
};

export { Main };
