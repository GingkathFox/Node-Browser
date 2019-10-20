module.exports = changeTabInfo

let getIcon = require('get-website-favicon')
let icons = require('../json/app/icons.json')
let settings = require('../json/app/settings.json')
async function changeTabInfo(tab, {
    icon = false,
    title = false,
    url,
    }) { 
        if (url) {
            searchbar.value = url
        } else {
            searchbar.value = tab.webview.getURL()
        }
    
    if (title) {
        let newTitle = tab.webview.getTitle()
        tab.setTitle(newTitle)
    }
    if (icon) {
        let ico = await getIcon(tab.webview.getURL())

        try {
            tab.setIcon(ico.icons[0].src)
        } catch(e) {
            tab.setIcon(settings.dark ? icons.dark.tab : icons.light.tab)
            console.error(`Can't find site icon, reverting to default`)
        }
    }
}