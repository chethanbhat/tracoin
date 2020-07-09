import React from "react";
import RemoveCoin from "./RemoveCoin";

const Coin = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-8 p-4 shadow-md rounded-lg mb-2">
        <div className="col-span-3">Coin Image</div>
        <div className="col-span-2">$12345</div>
        <div className="col-span-2">2.5% Up</div>
        <div className="col-span-1">
          <RemoveCoin />
        </div>
      </div>
    </div>
  );
};

export default Coin;
