module.exports = {
    findInPage,
    stopFindInPage
}

function findInPage(tab, searchText) {
    console.log('find')
    tab.webview.findInPage(searchText)
}

function stopFindInPage(tab) {
    tab.webview.stopFindInPage('clearSelection')
}