import React from "react";
import { Link } from "react-router-dom";
import RemoveCoin from "./RemoveCoin";
import ValueFall from "./ValueFall";
import ValueRise from "./ValueRise";

const Coin = ({ coin, deleteCoin }) => {
  console.log(coin);
  return (
    <Link to="/coindetail" className="z-10">
      <div className="container mx-auto px-2 md:px-4 mb-8 md:mb-4 z-10">
        <div className="flex items-center justify-around p-2 md:p-6 md:p-4 shadow-md rounded-lg relative">
          <div className="col-span-4 self-center">
            <img
              className="w-12 h-12 rounded"
              src={coin.image}
              alt={coin.name}
            />
          </div>
          <div className="col-span-3 text-gray-800 font-bold">
            ${coin.current_price}
          </div>
          <div className="col-span-3">
            {Number(coin.price_change_percentage_24h) > 0 ? (
              <span className="text-green-800 font-bold">
                <ValueRise />
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
            ) : (
              <span className="text-red-800 font-bold">
                <ValueFall />
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
            )}
          </div>
          <div
            className="absolute top-0 right-0 col-span-2 z-20"
            onClick={(e) => {
              e.preventDefault();
              deleteCoin(coin.id);
            }}
          >
            <RemoveCoin />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
