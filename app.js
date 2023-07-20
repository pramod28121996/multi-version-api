const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const v1_routing = require('./server/V1/routes/index.js')
const v2_routing = require('./server/V2/routes/index.js')

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
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to multiple level route api.",
        authentication_type: "Bearer Token",
        routes: {
            V1: [
                {
                    route: "/api/v1/get-token",
                    authentication: "Not Required"
                }, {
                    route: "/api/v1/posts/getAllPosts",
                    authentication: "Not Required"
                }, {
                    route: "/api/v1/posts/:id",
                    authentication: "Required"
                }],
            V2: [
                {
                    route: "/api/v2/get-token",
                    authentication: "Not Required"
                }, {
                    route: "/api/v2/posts/getAllPosts",
                    authentication: "Not Required"
                }, {
                    route: "/api/v2/posts/:id",
                    authentication: "Required"
                }, {
                    route: "/api/v2/posts/:id/comments",
                    authentication: "Required"
                }]
        }
    })
});
v1_routing(app)
v2_routing(app)


app.listen(3000, () => console.log(`server running at ${PORT}`));
