import React from "react";
import Coin from "./Coin";

const CoinList = () => {
  return (
    <div className="container mx-auto bg-gray-100 p-16 rounded-lg min-h-screen">
      <Coin />
      <Coin />
      <Coin />
      <Coin />
    </div>
  );
};

export default CoinList;
