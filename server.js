const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
dotenv.config({ path: "config.env" });

//Log Request
app.use(morgan("tiny"));

//Use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Set view engine
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;

//Load all routes
app.use('/',require('./server/routes/routes'))

app.listen(3000, () => console.log(`server running at ${PORT}`));
