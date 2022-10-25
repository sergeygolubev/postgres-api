const express = require("express");
const bodyParser = require("body-parser");
const v1MainRouter = require("./v1/routes/mainRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/1/users", v1MainRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
