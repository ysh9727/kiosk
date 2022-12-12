import React from "react";
import { Link } from "react-router-dom";

export default function MainNavi () {
  return (
    <section className="MainButtonBox">
      <Link to="/store" className="MainButton">매장</Link>
      <Link to="/takeout" className="MainButton">포장</Link>
    </section>
  )
}