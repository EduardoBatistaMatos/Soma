const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/soma", (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});

app.listen(8081, () => {
  console.log("Serviço de Soma rodando em http://localhost:8081/soma");
});
