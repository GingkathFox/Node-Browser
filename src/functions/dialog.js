let vex = require('vex-js')
vex.registerPlugin(require('vex-dialog'))
vex.defaultOptions.className = 'vex-theme-top'
module.exports = {
    alert(msg) {
        vex.dialog.alert(msg)
    }
}