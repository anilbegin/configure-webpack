const path = require('path')

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'myBundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    watch: true     // or we can use npx webpack --watch
}