const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const db = require("./db/db.js")
const userRouter = require("./routers/routes/user");


const app = express()
app.use(express.json());

dotenv.config()
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });