module.exports = changeTabInfo

let getIcon = require('get-website-favicon')

async function changeTabInfo(tab, {
    icon = false,
    title = false
    }) {  
    searchbar.value = tab.webview.getURL()

    if (title) {
        let newTitle = tab.webview.getTitle()
        tab.setTitle(newTitle)
    }
    if (icon) {
        let ico = await getIcon(tab.webview.getURL())

        try {
            tab.setIcon(ico.icons[0].src)
        } catch(e) {
            tab.setIcon('./images/tab.png')
            console.error(`Can't find site icon, reverting to default`)
        }
    }
}