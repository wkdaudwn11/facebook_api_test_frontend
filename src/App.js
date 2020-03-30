import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const url = `http://localhost:4000/api/v1/facebook/campaign/list`;
    axios
      .get(url)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return <div>App</div>;
};

export default App;
