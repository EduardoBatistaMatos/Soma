const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get("/soma", (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Serviço de Soma rodando na porta ${port}`);
});