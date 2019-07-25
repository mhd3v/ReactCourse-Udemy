const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        // need path.join because path needs an absoulte path
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};