const axios = require("axios");
const jwt = require("jsonwebtoken");

exports.homeRoutes = async (req, res) => {
  res.send({
    message: "Welcome to multiple level route api.",
    authentication_type: "Bearer Token",
    route: {
      getToken: "/get-token",
      V1: [{
        route: "/api/V1/items/getAllItems",
        authentication: "Not Required"
      }, {
        route: "/api/V1/items/:id",
        authentication: "Required"
      }],
      V2: [{
        route: "/api/V2/items/getAllItems",
        authentication: "Not Required"
      }, {
        route: "/api/V2/items/:id",
        authentication: "Not Required"
      }]
    }
  })
};

exports.getToken = (req, res) => {
  const email = "text@gmail.com";
  const token = jwt.sign({ user_id: 1, email }, process.env.TOKEN_KEY, {
    expiresIn: "2h",
  });
  res.send({ token: token, expiresIn: "2h" });
};


