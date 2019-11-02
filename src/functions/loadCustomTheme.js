module.exports = loadCustomTheme

function loadCustomTheme(theme) {
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
    head.innerHTML += theme.css

    // Load the icons
    if (settings.dark) {
        back.innerHTML = `<image src=${icons.dark.back}>`
        forward.innerHTML = `<image src=${icons.dark.forward}>`
        reload.innerHTML = `<image src=${icons.dark.reload}>`
        home.innerHTML = `<image src=${icons.dark.home}>`
        history.innerHTML = `<image src=${icons.dark.history}>`
    } else {
        back.innerHTML = `<image src=${icons.light.back}>`
        forward.innerHTML = `<image src=${icons.light.forward}>`
        reload.innerHTML = `<image src=${icons.light.reload}>`
        home.innerHTML = `<image src=${icons.light.home}>`
        history.innerHTML = `<image src=${icons.light.history}>`
    }   
}