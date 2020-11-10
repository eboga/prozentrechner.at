const { src, dest } = require('gulp');
const config  = require("./webpack.config.js");
const webpack = require("webpack-stream");



const scripts = () => {
    return src(["src/assets/scripts/index.js"])
        .pipe(webpack({config}))
        .pipe(dest("dist/assets/scripts"));
}



module.exports = scripts;
