module.exports = search
function search(v) {
    let url = v.target[2].value
    let urlregex =  /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
    let tab = tabGroup.getActiveTab()
    let webview = tab.webview
    let load;

    if (urlregex.test(url)) {
        load = url
        if (!url.startsWith(`https://`)) {
            load = `https://${url}`
        }

        webview.loadURL(load)
    }
    else if (!urlregex.test(url)) {
        try {
            webview.loadURL(`${settings.searchEngine}/search?q=${url}`)
        } catch(e) {
            console.error(e)
        }
    }
   /* webview.addEventListener('page-title-updated', (title) => {
        tab.setTitle(title.title)
    })*/
}