let settings = require('../json/app/settings.json')
module.exports = {
    setSettings({
        searchEngine = settings.searchEngine,
        home = settings.home,
        dark = settings.dark
    }) {
        let fs = require('fs')
        
        let json = {
            searchEngine,
            home,
            dark
        }

        try {
            fs.writeFileSync(`${process.pwd()}/src/json/app/settings.json`, JSON.stringify(json, null, 2))
        } catch(e) {
            console.error(`Coudn't save the settings.`)
            return
        }
    }
}