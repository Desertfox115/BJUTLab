const path = require('path');
const VuePlugin = require('vue-loader/lib/plugin-webpack4');
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
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VuePlugin()
    ]

};