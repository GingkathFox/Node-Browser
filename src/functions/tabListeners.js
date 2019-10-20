module.exports = tabListeners
let icons = require('../json/app/icons.json')
let settings = require('../json/app/settings.json')
let prompt = require('electron-prompt')
let changeTabInfo = require('./changeTabInfo')
let getIcon = require('get-website-favicon')
function tabListeners(tab) {
    let webview = tab.webview

    // Audio
    webview.addEventListener('media-started-playing', () => {
        tab.setIcon(settings.dark ? icons.dark.play : icons.light.play)
    })
    webview.addEventListener('media-paused', () => {
        changeTabInfo(tab, {
            title: true,
            icon: true
        })
    })
    webview.addEventListener('did-fail-load', () => {
        webview.loadURL('./html/error.html')
    })
    webview.addEventListener('crashed', () => {
        const { remote } = require('electron')
        const win = remote.BrowserWindow
        win.close()
    })
    webview.addEventListener('unresponsive', async () => {
        alert('This webpage is unresponsive.')
     /*  let r =  await prompt({
                    title: 'Webpage Unresponsive',
                    label: 'This webpage is unresponsive. Would you like to reload, close the tab, or wait?',
                    type: 'select',
                    
                })*/
    })
    webview.addEventListener('found-in-page', (e) => {
        webview.stopFindInPage('keepSelection')
    })
}