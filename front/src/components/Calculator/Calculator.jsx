import React from "react";
import { useState } from "react";
import axios from "axios";
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

  const defineOperator = (value) => {
    if (!numberOne) {
      return false;
    }

    if (!numberTwo) {
      console.log("pas de nombre 2")
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
        axios
          .post(`http://localhost:3001/calculate`, {
            numberOne,
            numberTwo,
            operator,
          })
          .then((res) => {
            setOperation(operation + value);
            setNumberTwo(numberTwo);
            setOperator(value);
            setOperation(operation + "=" + res.data.result);
            setResult(res.data.result);
            setResetAfterEqual(true);
            setShowResult(true);
          });
      } else {       
        axios
          .post(`http://localhost:3001/calculate`, {
            numberOne,
            numberTwo,
            operator,
          })
          .then((res) => {
            setOperation(operation + value);
            setResult(res.data.result);
            setNumberOne(res.data.numberOne)
            setNumberTwo(res.data.numberTwo)
            setShowResult(true);
          });
      }
    }
  };

  const resetAll = () => {
    setOperation(0);
    setNumberOne("");
    setNumberTwo("");
    setOperator("");
    setResult(0);
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
        numberOne={numberOne}
        numberTwo={numberTwo}
        result={result}
        operator={operator}
      />
    </div>
  );
};

export default Calculator;
