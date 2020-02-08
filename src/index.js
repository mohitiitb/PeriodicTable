import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { elements } from "./_data";
import Checkbox from "./checkbox";

function PeriodicTable(props) {
  const category = {
    noble: 0,
    alkali: 1,
    alkaline: 1,
    transition: 1,
    polyatomic: 1,
    diatomic: 1,
    "post-transition": 1,
    metalloid: 1,
    lanthanide: 1,
    actinide: 1,
    "unknown,": 1
  };
  function getFirstWord(str) {
    let spacePosition = str.indexOf(" ");
    if (spacePosition === -1) return str;
    else return str.substr(0, spacePosition);
  }
  function handleCheckboxChange(props) {}
  function renderCell(props) {
    if (!category[getFirstWord(props.category)]) {
      return (
        <div className={`element element-${props.number} ${props.category}`} />
      );
    } else {
      return Cell(props);
    }
  }
  return (
    <div className="wrapper">
      <h1 align="center"> The Periodic Table of Elements </h1>
      <div id="table">{elements.map(block => renderCell(block))}</div>
      <div align="center">
        {/* {Object.keys(category).map(key => category[key])} */}
        {/* {Object.keys(category).map(key => (
          <p>{key}</p>
        ))} */}
        {Object.keys(category).map(key => (
          <label key={key}>
            {" "}
            {key}
            <Checkbox
              name={key}
              checked={category[key]}
              onChange={handleCheckboxChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function Cell(props) {
  return (
    <div className={`element element-${props.number} ${props.category}`}>
      <div className="number">{props.number}</div>
      <div className="symbol">{props.symbol}</div>
      <div className="element-name">{props.category}</div>
    </div>
  );
}

const rootElement = document.getElementById("root"); //see index.html
ReactDOM.render(<PeriodicTable />, rootElement);
