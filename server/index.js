const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const { mongodb } = require("./config/db");
const { userRouter } = require("./routers/user");
const { linkRouter } = require("./routers/link");
const { errorHandler } = require("./middleware/errorHandler");


const app = express();
app.use(cors());
dotenv.config({path: './config/config.env'});
const port = process.env.PORT || 5001;


mongodb();
app.use(express.json());

app.use("/api/v1/",userRouter);
app.use("/api/v1/",linkRouter);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`)
});