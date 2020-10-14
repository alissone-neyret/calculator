import React from "react";
import { useState } from "react";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import CalculatorKeys from "../CalculatorKeys/CalculatorKeys";
import "./Calculator.css";
import "../CalculatorKeys/CalculatorKeys.css";

const Calculator = (props) => {
  const [operation, setOperation] = useState(0);
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [showResult, setShowResult] = useState(false);

  const setValue = (value) => {

    if (!numberOne) {
      setOperation(value);
      setNumberOne(value);
    } else if (!operator) {
      if (numberOne.indexOf(".") !== -1 && value === ".") {
        return "";
      }
      setOperation(operation + value);
      setNumberOne(numberOne + value);

    } else if (operator) {

      if (numberTwo.indexOf(".") !== -1 && value === ".") {
        return "";
      }
      setOperation(operation + value);
      setNumberTwo(numberTwo + value);
    }
  };

  const defineOperator = (value) => {
    if (!numberTwo) {
      if (
        operation.indexOf("+") !== -1 ||
        operation.indexOf("-") !== -1 ||
        operation.indexOf("x") !== -1 ||
        operation.indexOf("/") !== -1
      ) {
        return "";
      }
      setOperator(value);
      setOperation(operation + value);

    } else if (numberTwo) {
      switch (operator) {
        case "+":
          setOperation(operation + value);

          setNumberOne(parseFloat(numberOne) + parseFloat(numberTwo));
          setNumberTwo("");
          setOperator(value);
          setShowResult(true);
          break;
        case "-":
          setOperation(operation + value);
          setNumberOne(parseFloat(numberOne) - parseFloat(numberTwo));
          setNumberTwo("");
          setOperator(value);
          setShowResult(true);
          break;
        case "x":
          setOperation(operation + value);
          setNumberOne(parseFloat(numberOne) * parseFloat(numberTwo));
          setNumberTwo("");
          setOperator(value);
          setShowResult(true);
          break;
        case "/":
          setOperation(operation + value);
          setNumberOne(parseFloat(numberOne) / parseFloat(numberTwo));
          setNumberTwo("");
          setOperator(value);
          setShowResult(true);
          break;
      }
    }
  };

  const resetAll = () => {
    setOperation(0);
    setNumberOne("");
    setNumberTwo("");
    setOperator("");
    setShowResult(false);
  };


  return (
    <div className="calculator">
      <CalculatorDisplay
        operation={operation}
        result={numberOne}
        showResult={showResult}
      />
      <CalculatorKeys
        handleClickNumber={(e) => setValue(e)}
        handleClickOperator={(e) => defineOperator(e)}
        handleClickReset={() => resetAll()}
      />
    </div>
  );
};

export default Calculator;
