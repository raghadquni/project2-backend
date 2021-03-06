const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
require("./db/db.js")
const userRouter = require("./routers/routes/user");
const productRouter = require("./routers/routes/product");
// const roleRouter = require("./routers/routes/role");



const app = express()
app.use(express.json());

dotenv.config()
app.use(cors());
app.use(morgan("dev"));

app.use("/users", userRouter);
app.use("/products", productRouter);
// app.use("/roles", roleRouter);





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });