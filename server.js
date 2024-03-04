const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const { connect } = require("mongoose");
const connectDB = require("./config/dbConnection.js");
const env = require("dotenv").config();
const app = express();

connectDB();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
