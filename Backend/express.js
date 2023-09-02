
const express = require("express")
const cors = require("cors");
const router = require('./Routers')

const app = express();

app.use(express.json())

app.use(cors({
    origin : "*"
}))

app.use("/", router )


module.exports = app