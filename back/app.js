const express = require("express");
const app = express();
const port = 3001;
const router = express.Router();
var cors = require("cors");
const controller = require("./controller");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/', router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/calculate", controller.calculateByOperator);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
