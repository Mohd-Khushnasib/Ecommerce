import React from "react";
import "./style.css";
import Productlist from "./Product/Productlist";
export default function Home() {
  return (
    <>
      <h1 className="about" style={{ height: "50px", color: "red" }}>
        Home
      </h1>
      <Productlist></Productlist>
    </>
  );
}
