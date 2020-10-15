import React from "react";
import "./CalculatorKeys.css";

const CalculatorKeys = (props) => {
  return (
    <div className="calculator-keys">
      <div className="calculator-keys__contain">
        <button
          value="C"
          className="calculator-keys__contain-button-C"
          onClick={() => props.handleClickReset()}
        >
          C
        </button>
        <button
          value="/"
          className="calculator-keys__contain-button-orange"
          onClick={(e) => props.handleClickOperator(e.target.value)}
        >
          /
        </button>
      </div>
      <div>
        <button
          value="7"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          7
        </button>
        <button
          value="8"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          8
        </button>
        <button
          value="9"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          9
        </button>
        <button
          value="x"
          className="calculator-keys__contain-button-orange"
          onClick={(e) => props.handleClickOperator(e.target.value)}
        >
          X
        </button>
      </div>
      <div>
        <button
          value="4"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          4
        </button>
        <button
          value="5"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          5
        </button>
        <button
          value="6"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          6
        </button>
        <button
          value="-"
          className="calculator-keys__contain-button-orange"
          onClick={(e) => props.handleClickOperator(e.target.value)}
        >
          -
        </button>
      </div>
      <div>
        <button
          value="1"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          1
        </button>
        <button
          value="2"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          2
        </button>
        <button
          value="3"
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          3
        </button>
        <button
          value="+"
          className="calculator-keys__contain-button-orange"
          onClick={(e) => props.handleClickOperator(e.target.value)}
        >
          +
        </button>
      </div>
      <div>
        <button
          value="0"
          onClick={(e) => props.handleClickNumber(e.target.value)}
          className="calculator-keys__contain-button-0"
        >
          0
        </button>
        <button
          value="."
          onClick={(e) => props.handleClickNumber(e.target.value)}
        >
          .
        </button>
        <button
          value="="
          className="calculator-keys__contain-button-orange"
          onClick={(e) => props.handleClickOperator(e.target.value)}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default CalculatorKeys;
