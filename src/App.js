import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";
import CoinSummary from "./pages/CoinSummary";
import Header from "./components/Header";
import { WatchListContextProvider } from "./context/WatchListContext";

function App() {
  return (
    <div className="shadow-xl p-4 bg-gray-800 min-h-screen">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummary} />
          <Route exact path="/coins/:id" component={CoinDetails} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
