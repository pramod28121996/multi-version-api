const routesLoader = require('../../../Libs/routesLoader.js')

module.exports = async function (app) {
    routesLoader("V2").then(files => {
        files.forEach(route => {
            app.use("/api/v2", route)
        });
    }).catch(error => {
        console.log("error=>", error);
    })
}
