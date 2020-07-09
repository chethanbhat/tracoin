import React from "react";
import RemoveCoin from "./RemoveCoin";

const Coin = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 mb-8 md:mb-4">
      <div className="flex items-center justify-around p-2 md:p-6 md:p-4 shadow-md rounded-lg text-center">
        <div className="col-span-4 self-center">Coin Image</div>
        <div className="col-span-3">$12345</div>
        <div className="col-span-3">2.5% Up</div>
        <div className="col-span-2">
          <RemoveCoin />
        </div>
      </div>
    </div>
  );
};

export default Coin;
