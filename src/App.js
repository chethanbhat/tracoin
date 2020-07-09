import React from "react";
import CoinList from "./components/CoinList";

function App() {
  return (
    <div className="shadow-xl p-4 bg-gray-800 h-screen">
      <h1 className="text-center text-6xl text-yellow-600 mb-8">traCoin</h1>
      <CoinList />
    </div>
  );
}

export default App;
