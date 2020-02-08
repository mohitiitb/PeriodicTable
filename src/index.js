import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { elements } from "./_data";
import Checkbox from "./checkbox";

function Cell(props) {
  return (
    <div className={`element element-${props.number} ${props.category}`}>
      <div className="number">{props.number}</div>
      <div className="symbol">{props.symbol}</div>
    </div>
  );
}

function PeriodicTable(props) {
  var category = {
    noble: false,
    alkali: true,
    alkaline: true,
    transition: true,
    polyatomic: true,
    diatomic: true,
    "post-transition": true,
    metalloid: true,
    lanthanide: true,
    actinide: true,
    "unknown,": true
  };
  const st = useState(category);
  var cat = st[0];
  var setter = st[1];
  function getFirstWord(str) {
    let spacePosition = str.indexOf(" ");
    if (spacePosition === -1) return str;
    else return str.substr(0, spacePosition);
  }
  function handleCheckboxChange(props) {
    var newstate = { ...cat };
    if (cat[props.target.name] === true) {
      newstate[props.target.name] = false;
    } else {
      newstate[props.target.name] = true;
    }
    setter(newstate);
  }
  function RenderCell(props) {
    if (!cat[getFirstWord(props.category)]) {
      return (
        <div className={`element element-${props.number} ${props.category}`} />
      );
    } else {
      return (
        <Cell
          number={props.number}
          key={props.number}
          category={props.category}
          symbol={props.symbol}
        />
      );
    }
  }
  return (
    <div className="wrapper">
      <h1 align="center"> The Periodic Table of Elements </h1>
      <div id="table">{elements.map(block => RenderCell(block))}</div>

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
              checked={cat[key]}
              onChange={handleCheckboxChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root"); //see index.html
ReactDOM.render(<PeriodicTable />, rootElement);
