import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    // fetchData();
  }, [id]);

  return <div></div>;
};

export default CoinDetails;
