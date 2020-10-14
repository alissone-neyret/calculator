import React from "react";
import './CalculatorKeys.css';

const CalculatorKeys = (props) => {
  return (
    <div className="calculator-keys">
      <div className="calculator-keys__contain">
        <button className="calculator-keys__contain-button-C">C</button>
        <button className="calculator-keys__contain-button-orange">/</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
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
        <button className="calculator-keys__contain-button-orange">+</button>
      </div>
      <div>
        <button className="calculator-keys__contain-button-0">0</button>
        <button>.</button>
        <button className="calculator-keys__contain-button-orange">=</button>
      </div>
    </div>
  );
};

export default CalculatorKeys;
