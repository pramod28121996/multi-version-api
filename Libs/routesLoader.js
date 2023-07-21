const { glob, } = require('glob')

module.exports = async function (version) {
  return new Promise((resolve, reject) => {
    const routes = [];
    glob(`server/${version.toUpperCase()}/routes/*.js`, { ignore: '**/index.js' },)
      .then((files) => {
        files.forEach(file => {
          routes.push(require("../" + file));
        });
        return resolve(routes);
      });
  });
}
