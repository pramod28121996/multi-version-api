const { glob, Glob } = require('glob')
//const s= required('server\V1\routes\ItemRoutes.js')

module.exports = function (version) {  
  return new Promise((resolve, reject) => {
    const routes = [];    
    glob(`server/${version}/routes/*.js`, { ignore: '**/index.js' },)
      .then((files) => {        
        files.forEach(file => {                      
          routes.push(require("../"+file));          
        });
        return resolve(routes);
      });
  });
}
