import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
import Details from "../components/Details";
import coinGecko from "../apis/coinGecko";

const CoinDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [coinData, setCoinData] = useState({});
  // Format Data as per ChartJS
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [coin, day, week, year] = await Promise.all([
        coinGecko.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: `${id}`,
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
      ]);

      setCoinData({
        coin: coin.data[0],
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
      });
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  const renderData = () => (
    <div className="container mx-auto bg-gray-100 sm:p-4 md:p-16 rounded-lg min-h-half relative">
      <Chart data={coinData} />
      <Details data={coinData.coin} />
    </div>
  );

  return isLoading ? (
    <h2 className="text-center text-3xl text-white mb-8">Loading....</h2>
  ) : (
    renderData()
  );
};

export default CoinDetails;
