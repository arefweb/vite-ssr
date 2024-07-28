const express = require("express");
const cors = require("cors");
const transactions = require("./data.cjs");

const app = express();
const PORT = 8628;

app.use(cors({ origin: 'http://localhost:5272' }));
app.use(express.json());

app.get("/api/transactions/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = {
    totalCount: transactions.length,
    transactions: transactions.slice(startIndex, endIndex),
  };

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`API Server is running on: http://localhost:${PORT}`);
});
