import React, { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./Components/Coins/Coins";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./Routes/Coin";

const App = () => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`;
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        {/* <Route path="/coin" element={<Coin />}> */}
        <Route path="/coin/:coinId" element={<Coin />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;
