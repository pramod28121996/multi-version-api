const axios = require("axios");
const jwt = require("jsonwebtoken");

exports.homeRoutes = async (req, res) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      res.render("index", { products: response.data.slice(0, 10) });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getItemById = async (req, res) => {
  const { id } = req.params;
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
      res.render("show", { products: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.itemsRoutes = async (req, res) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      res.send({ products: response.data.slice(0, 10) });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getToken = (req, res) => {
  const email = "text@gmail.com";
  const token = jwt.sign({ user_id: 1, email }, process.env.TOKEN_KEY, {
    expiresIn: "2h",
  });
  res.send({ token: token, expiresIn: "2h" });
};

exports.duplicateNumber = (req, res) => {
  let { data } = req.body;
  const numMap = {};

  for (let i = 0; i < data.length; i++) {
    if (numMap[data[i]] !== undefined) {
      res.send({ data: data[i] });
    }
    numMap[data[i]] = i;
  }
  res.send({ data: "There is no any duplicate number in array" });
};
