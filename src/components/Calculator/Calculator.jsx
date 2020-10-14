import React from "react";
import { useState } from "react";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import CalculatorKeys from "../CalculatorKeys/CalculatorKeys";
import "./Calculator.css";
import "../CalculatorKeys/CalculatorKeys.css";

const Calculator = (props) => {
  const [operation, setOperation] = useState("");
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [showResult, setShowResult] = useState(false);

  const setValue = (value) => {
    console.log("set value", value)
    if (!operator) {
      console.log("pas d'opérateur")
      setOperation(operation + value);
      setNumberOne(numberOne + value);

      console.log("operation", operation)
      console.log("numberOne", numberOne)
    } else if (operator) {
      console.log("un opérateur")

      setOperation(operation + value);
      setNumberTwo(numberTwo + value);

      console.log("operation", operation)
      console.log("numberTwo", numberTwo)
    }
  };

  const defineOperator = (value) => {
    if (!numberTwo) {
      console.log("ya pas de 2ème nombre")
      setOperator(value);
      setOperation(operation + value);

      console.log("operateur", operator)
      console.log("operation", operation)
    } else if (numberTwo) {
      console.log("y a un nombre 2")
      switch (operator) {
        case "+":
          console.log("je fais une addition")
          setOperation(operation + value)
          setNumberOne(parseFloat(numberOne) + parseFloat(numberTwo));
          setNumberTwo("");
          setOperator(value);
          setShowResult(true);

          console.log("number one", numberOne)
          console.log("number two", numberTwo)
          console.log("operateur", operator)
      }
    }
  };
  
  console.log("number one render", numberOne)
  console.log("number two render", numberTwo)

  return (
    <div className="calculator">
      <CalculatorDisplay
        operation={operation}
        result={numberOne}
        showResult={showResult}
      />

      <div className="calculator-keys">
        <div className="calculator-keys__contain">
          <button className="calculator-keys__contain-button-C" value="C">
            C
          </button>
          <button className="calculator-keys__contain-button-orange">/</button>
        </div>
        <div>
          <button
            value="7"
            onClick={(e) => {
              setValue(e.target.value);
            }}
          >
            7
          </button>
          <button
            value="8"
            onClick={(e) => {
              setValue(e.target.value);
            }}
          >
            8
          </button>
          <button>9</button>
          <button className="calculator-keys__contain-button-orange">X</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="calculator-keys__contain-button-orange">-</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button
            value="+"
            className="calculator-keys__contain-button-orange"
            onClick={(e) => {
              defineOperator(e.target.value);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button className="calculator-keys__contain-button-0">0</button>
          <button>.</button>
          <button
            value="="
            className="calculator-keys__contain-button-orange"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
