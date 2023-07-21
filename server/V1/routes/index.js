const routes = require('../../../Libs/routes.js');
const routesLoader = require('../../../Libs/routesLoader.js')

module.exports = async function (app, version) {
    await routesLoader(version).then(async files => {
        files.forEach(route => {
            app.use(`/api/${version}`, route)
        });
        await routes(app)
    }).catch(error => {
        console.log("error=>", error);
    })
}
