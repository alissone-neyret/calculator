const calculateByOperator = (req, res) => {
  let numberOne = req.body.numberOne;
  let numberTwo = req.body.numberTwo;
  let operator = req.body.operator;
  let result;

  switch (operator) {
    case "+":
      console.log("+");
      numberOne = parseFloat(numberOne) + parseFloat(numberTwo);
      result = numberOne;
      console.log("result +", result)
      break;
    case "-":
      numberOne = parseFloat(numberOne) - parseFloat(numberTwo);
      result = numberOne;
      break;
    case "x":
      numberOne = parseFloat(numberOne) * parseFloat(numberTwo);
      result = numberOne;
      break;
    case "/":
      numberOne = parseFloat(numberOne) / parseFloat(numberTwo);
      result = numberOne;
      break;
  }
  let response = { numberOne, numberTwo: "", result }

  res.json(response);
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

module.exports = { calculateByOperator };
