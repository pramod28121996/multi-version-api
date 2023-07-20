const routesLoader = require('../../../Libs/routesLoader.js')

module.exports = async function (app) {
    routesLoader("V1").then(files => {
        files.forEach(route => {
            app.use("/api/v1", route)
        });
    }).catch(error => {
        console.log("error=>", error);
    })
}
