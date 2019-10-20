module.exports = search
function search(v) {
    let url = v.target[2].value
    let urlregex =  /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
    let tab = tabGroup.getActiveTab()
    let webview = tab.webview
    let load;
    // http://track.tkbo.com/?mid=138&f=138&domain=soundcould.com
    // ^ HTTP test url
    if (urlregex.test(url)) {
        load = url
        if (!url.startsWith(`https://`) && !url.startsWith(`http://`)) {
            load = `https://${url}`
        }
        if (url.startsWith(`http://`)) {
            let value = confirm('This website is HTTP, which goes against this browsers security policy. \nIf you want to continue to this site, click "Ok".')
            if (!value) {
                alert('Closing the tab.')
               tab.close() 
            }          
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