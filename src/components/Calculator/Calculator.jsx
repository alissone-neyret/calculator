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
  const [resetAfterResult, setResetAfterResult] = useState(false);

  const setValue = (value) => {
    console.log("reset after result set value", resetAfterResult);
    if (resetAfterResult) {
      console.log("reset after result");
      setOperation(value);
      setNumberOne(value);
      setResetAfterResult(false);
    } else if (!numberOne) {
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

  const calculate = (value) => {
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
      console.log("operator", operator);

      if (value === "=") {
        calculate(value);
        setResetAfterResult(true);
      }
      return calculate(value);
    }
  };

  const resetAll = () => {
    setOperation(0);
    setNumberOne("");
    setNumberTwo("");
    setOperator("");
    setShowResult(false);
  };

  console.log("reset after result render", resetAfterResult);

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
