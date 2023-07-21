const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./Libs/routes");
const { versions } = require("./Libs/utils");


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
require('./Server/Versions')(app)

app.listen(3000, () => console.log(`server running at ${PORT}`));
