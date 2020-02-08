import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { elements } from "./_data";

function checkbox(props) {}

function PeriodicTable(props) {
  var category = [{ a: 1, b: 1 }];
  return (
    <div className="wrapper">
      <h1 align="center"> The Periodic Table of Elements </h1>
      <div id="table">{elements.map(block => Cell(block))}</div>
      <div align="center">hello</div>
    </div>
  );
}

function Cell(props) {
  return (
    <div className={`element element-${props.number} ${props.category}`}>
      <div className="number">{props.number}</div>
      <div className="symbol">{props.symbol}</div>
    </div>
  );
}

const rootElement = document.getElementById("root"); //see index.html
ReactDOM.render(<PeriodicTable />, rootElement);
