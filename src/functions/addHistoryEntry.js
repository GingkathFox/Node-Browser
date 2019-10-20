module.exports = addHistoryEntry

let history = require('../json/user/history.json').entries
let fs = require('fs')

/**
 * Add a History entry.
 * @param {string} url The tab URL.
 * @param {string} title The tab title.
 * @param {Tab} tab The tab object.
 */
function addHistoryEntry(url, title, tab, clear = false) {
    let historyFile = `${process.cwd()}/src/json/user/history.json`
    date = Date(Date.now())

    if (clear) {
        try {
            fs.writeFileSync(historyFile, `{ "entries": [ ] }`)
            return true
        } catch(e) {
            console.error(`Couldn't clear the History.`)
        }
    }
    if (!title) {
        title = tab.webview.getTitle()
    }
    let entry = {
        title,
        url,
        date
    }
    history.push(entry)

    let json = {
        "entries": history
    }
    try {
        fs.writeFileSync(historyFile, JSON.stringify(json, null, 2))
    } catch(e) {
        console.error(`Couldn't write the history entry.`)
        return false
    }
    
}