import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfiguration from "../webpack.client.js";

const builder = app => {
    if (process.env.NODE_ENV === "development") {
        const compiler = webpack(webpackConfiguration);
        const middleware = webpackMiddleware(compiler, {
            publicPath : webpackConfiguration.output.publicPath
        })
        app.use(middleware)
        app.use(webpackHotMiddleware(compiler))
    }
}

export default builder;