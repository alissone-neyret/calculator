const calculateByOperator = (req, res) => {
  let numberOne = req.body.numberOne;
  let numberTwo = req.body.numberTwo;
  let operator = req.body.operator;
  let result;

  switch (operator) {
    case "+":
      numberOne = parseFloat(numberOne) + parseFloat(numberTwo);
      result = numberOne;
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

module.exports = { calculateByOperator };
