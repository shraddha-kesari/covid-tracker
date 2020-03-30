import axios from "axios";

const getCovidData = () =>
  axios
    .get("https://api.covid19india.org/data.json")
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return;
    });

export { getCovidData };
