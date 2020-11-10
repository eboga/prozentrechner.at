const path         = require("path");
const { merge }        = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");



const TARGET = process.env.npm_lifecycle_event;



let config = {
    mode: "development",
    output: {
        filename: "main.js",
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "src/assets/scripts"),
        ],
        extensions: [".js"],
    },
    devtool: "cheap-source-map",
    context: path.resolve(__dirname, "src/assets/scripts"),
    target: "web",
    stats: "normal",
    profile: true,
};



if (TARGET === "prod") {
    config = merge(config, {
        devtool: "",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                }
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                extractComments: false
            })],
        },
        output: { pathinfo: false }
    });
}



module.exports = config;
