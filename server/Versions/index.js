var path = require('path');
const fs = require('fs');
const { versions } = require('../../Libs/utils');

module.exports = async function (app) {
    try {        
        const versionsLoop = async _ => {
            let isNewVersionAdded = false;
            /*
                @description: Loop is for to check if new version is added or not.
                if it is added then it's create newly added version folder into the
                "./Server" folder.
                @params : "versions" array, which is hold list of all versions.
            */
            for (let index = 0; index < versions.length; index++) {
                if (versions[index].match("^V[0-9]+$")) {
                    const versionPath = path.join(__filename, `../../${versions[index]}`)
                    if (!fs.existsSync(versionPath)) {
                        fs.mkdirSync(versionPath);
                        isNewVersionAdded = true
                        console.log(`New Version ${versions[index]} Folder Is Created At ${versionPath} `)
                    }
                } else {
                    console.log(`Invalid Version Name, ${versions[index]}`)
                }
            }
            /*
                @description: "isNewVersionAdded" variable is hold true or false if true it means new
                version folder is created and inside block, copy all the previous version of files and folders
                and past into newly created version folder.
                @params : "isNewVersionAdded" variable, which is hold true|false.
            */
            if (isNewVersionAdded) {
                const lastVersion = versions[versions.length - 1]
                const lastToLastVersion = versions[versions.length - 2]
                if (lastVersion && lastToLastVersion) {
                    const sourceFolderPath = path.join(__filename, `../../${lastToLastVersion}`)
                    const destinationFolderPath = path.join(__filename, `../../${lastVersion}`)
                    fs.cpSync(sourceFolderPath, destinationFolderPath, { recursive: true },
                        (err) => console.log(err));
                }
                else {
                    console.log("Something went wrong while get version for copy.")
                }
            }

            for (let index = 0; index < versions.length; index++) {
                const version = versions[index]
                try {
                    require(`../${version}/routes/index.js`)(app,version)
                } catch (error) {
                    console.log("Error while required the file, ", error.message)
                }
            }

        }
        await versionsLoop()              
    } catch (err) {
        console.error(err);
    }    
}
