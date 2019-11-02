module.exports = loadTheme

let loadStyle = require('./loadStyle')
function loadTheme(theme) {
    let css
    let icons

    // Attempt to load theme data (css, icons)
    try {
        css = theme.css
        icons = theme.icons
    } catch(e) {
        console.error(`Couldn't load the theme`)
        return
    }

    let back = document.getElementById('back')
    let forward = document.getElementById('forward')
    let reload = document.getElementById('reload')
    let home = document.getElementById('home')
    let history = document.getElementById('history')
    let head = document.head

    // Load the CSS
    loadStyle(css, theme.folder)

    // Load the icons
    if (settings.dark) {
        console.log(`themes/${theme.folder}/${icons.dark.back}`)
        back.innerHTML = `<image src=themes/${theme.folder}/${icons.dark.back}>`
        forward.innerHTML = `<image src=themes/${theme.folder}/${icons.dark.forward}>`
        reload.innerHTML = `<image src=themes/${theme.folder}/${icons.dark.reload}>`
        home.innerHTML = `<image src=themes/${theme.folder}/${icons.dark.home}>`
        history.innerHTML = `<image src=themes/${theme.folder}/${icons.dark.history}>`
    } else {
        back.innerHTML = `<image src=themes/${theme.folder}/${icons.light.back}>`
        forward.innerHTML = `<image src=themes/${theme.folder}/${icons.light.forward}>`
        reload.innerHTML = `<image src=themes/${theme.folder}/${icons.light.reload}>`
        home.innerHTML = `<image src=themes/${theme.folder}/${icons.light.home}>`
        history.innerHTML = `<image src=themes/${theme.folder}/${icons.light.history}>`
    }   
}