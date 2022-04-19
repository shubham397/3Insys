import React, { useEffect, useState } from "react";
import Card from './Card';
import '../Styles/Dashboard.css'

const Dashboard = (props) => {
  useEffect(() => {
  }, []);

  return (
    <div className="product-catalog">
        <h3>T-Shirt for sale</h3>
        <Card />
    </div>
  );
};
export default Dashboard;