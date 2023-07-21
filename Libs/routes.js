const { versions } = require("./utils");

module.exports = function (app) {
    var routes = [];
    if (versions.length > 0) {
        routes = versions.map(ver => {
            return { version: ver, routes: [] }
        })
    }
    function print(path, layer) {
        if (layer.route) {
            layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
        } else if (layer.name === 'router' && layer.handle.stack) {
            layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
        } else if (layer.method) {
            const version = path.concat(split(layer.regexp)).filter(Boolean)[1]            
            routes = routes.map(ver => {
                if (ver.version.toUpperCase() === version.toUpperCase()) {
                    const routePath=path.concat(split(layer.regexp)).filter(Boolean).join('/')
                    ver.routes = [...ver.routes, { method: layer.method.toUpperCase(), route: routePath}]
                }
                return ver
            })
        }
    }
    function split(thing) {
        if (typeof thing === 'string') {
            return thing.split('/')
        } else if (thing.fast_slash) {
            return ''
        } else {
            var match = thing.toString()
                .replace('\\/?', '')
                .replace('(?=\\/|$)', '$')
                .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
            return match
                ? match[1].replace(/\\(.)/g, '$1').split('/')
                : '<complex:' + thing.toString() + '>'
        }
    }

    app._router.stack.forEach(print.bind(null, []))    
    const data = routes.find(d => d.routes?.length == 0)
    if (routes.length > 0 && data === undefined) {        
        const routesObject = routes.map(route => {
            const versionObject = { [route.version]: [] }
            route.routes.forEach(d => {
                versionObject[route.version] = [...versionObject[route.version], d]
            })
            return versionObject
        })
        let isLength = false;
        versions.forEach(ver => {
            routesObject.find(d => {
                if (d[ver]) {
                    if (d[ver].length === 0) { isLength = true }
                }
            })
        })        
        if (!isLength) {
            const newRoutesObject = [];
            routesObject.forEach(route => {
                const obj = {}                
                if (route[Object.keys(route)[0]]) {
                    if (route[Object.keys(route)[0]].length > 0) {
                        var clean = route[Object.keys(route)[0]].filter((arr, index, self) =>
                            index === self.findIndex((t) => (t.route === arr.route && t.method === arr.method)))
                        obj[Object.keys(route)[0]] = clean
                    }
                }
                newRoutesObject.push(obj)

            })            
            app.get("/", (req, res) => {
                res.send({
                    message: "Welcome to multiple level route api.",
                    authentication_type: "Bearer Token",
                    routes: newRoutesObject
                })
            });
        }

    }
}
