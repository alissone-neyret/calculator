import React from "react";
import "./CalculatorDisplay.css";

const CalculatorDisplay = (props) => {
  const { showResult, operation, result } = props;
  return (
    <div className="calculator-display">
      <div>
        <p className="calculator-display-operation">
          {showResult ? operation : ""}
        </p>
        <p className="calculator-display-result">
          {!showResult ? operation : result}
        </p>
      </div>
    </div>
  );
};

export default CalculatorDisplay;
