import React from "react";
import { useParams } from "react-router-dom";

const Seller = () => {
  const { seller } = useParams();
  return <div>{seller}</div>;
};

export default Seller;
