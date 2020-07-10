import React, { useState } from "react";

const AddCoin = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <div className="relative p-4">
      <button
        className="relative block bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none z-10"
        onClick={() => setToggleOpen(!toggleOpen)}
      >
        Add Coin
      </button>
      {toggleOpen ? (
        <>
          <button
            onClick={() => setToggleOpen(false)}
            tabIndex="-1"
            className="fixed w-full h-full inset-0 bg-black opacity-50 cursor-default"
          ></button>
          <div className="absolute w-64 py-2 mt-2 bg-white rounded-lg shadow-xl z-10">
            <a
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              href="http://"
            >
              Item 1
            </a>
            <a
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              href="http://"
            >
              Item 2
            </a>
            <a
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              href="http://"
            >
              Item 3
            </a>
            <a
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              href="http://"
            >
              Item 4
            </a>
            <a
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              href="http://"
            >
              Item 5
            </a>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AddCoin;
