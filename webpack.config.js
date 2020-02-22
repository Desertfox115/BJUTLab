const path = require('path');
const files = ['index', 'login', 'preorder', 'register', 'inform', 'me'];
const getEntries = () => {
    const e = {};
    for (const file of files) {
        e[file] = `./src/js/${file}.js`;
    }
    return e;
};


module.exports = {
    entry: getEntries(),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist/js')

    }

};