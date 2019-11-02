module.exports = loadStyle

function loadStyle(css, folder) {
    let link = document.getElementById('themecss')

    if (settings.dark) {
        link.setAttribute('href', `./themes/${folder}/${css.dark}`)
        console.log(`Dark theme loaded!`)
    } else {
        link.setAttribute('href', `./themes/${folder}/${css.light}`)
        console.log(`Light theme loaded!`)
    }
    console.log(`Style loaded!`)
    
}