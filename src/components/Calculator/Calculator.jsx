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
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resetAfterEqual, setResetAfterEqual] = useState(false);

  const setValue = (value) => {

    if (resetAfterEqual) {
      setOperation(value);
      setNumberOne(value);
      setResult(0);
      setResetAfterEqual(false);
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

  const calculateByOperator = (value) => {

    switch (operator) {
      case "+":
        console.log("+");
        calculate(value);
        setNumberOne(parseFloat(numberOne) + parseFloat(numberTwo));
        setResult(parseFloat(numberOne) + parseFloat(numberTwo));
        break;
      case "-":
        calculate(value);
        setNumberOne(parseFloat(numberOne) - parseFloat(numberTwo));
        setResult(parseFloat(numberOne) - parseFloat(numberTwo));
        break;
      case "x":
        calculate(value);
        setNumberOne(parseFloat(numberOne) * parseFloat(numberTwo));
        setResult(parseFloat(numberOne) * parseFloat(numberTwo));
        break;
      case "/":
        calculate(value);
        setNumberOne(parseFloat(numberOne) / parseFloat(numberTwo));
        setResult(parseFloat(numberOne) / parseFloat(numberTwo));
        break;
      default:
        calculate(value);
        break;
    }
  };

  const calculate = (value) => {

    if (!value) {
      return false;
    }

    setOperation(operation + value);
    setNumberTwo("");
    setOperator(value);
    setShowResult(true);
  };

  const defineOperator = (value) => {

    if (!numberOne) {
      return false;
    }

    if (!numberTwo) {
      if (
        operation.indexOf("+") !== -1 ||
        operation.indexOf("-") !== -1 ||
        operation.indexOf("x") !== -1 ||
        operation.indexOf("/") !== -1
      ) {
        return false;
      }
      setOperator(value);
      setOperation(operation + value);
      setResult(result + parseFloat(numberOne));
      setShowResult(true);

    } else if (numberTwo) {

      if (value === "=") {
        calculateByOperator(value);
        setOperation(operation + toString(result));
        setResetAfterEqual(true);
      }

      return calculateByOperator(value);
    }
  };

  const resetAll = () => {

    setOperation(0);
    setNumberOne("");
    setNumberTwo("");
    setOperator("");
    setResult(0)
    setShowResult(false);
  };

  return (
    <div className="calculator">
      <CalculatorDisplay
        operation={operation}
        result={result}
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
