const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
	name : "REACT APPLICATION - Webpack server configuration",
	entry : path.join(CURRENT_WORKING_DIR, "/server/index.js"),
	target : "node",
	output : {
		path : path.join(CURRENT_WORKING_DIR, "/build",),
		filename : "build.server.js",
		publicPath : "/build",
		libraryTarget : "commonjs2"	
	},
	externals : [nodeExternals()],
	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				use : ["babel-loader"] 
			},
			{
                test : /\.css$/,
                use : [
                    "style-loader",
                    "css-loader" 
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                  ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options : {
                    name : '[name][hash].[ext]'
                }
            }
		]
	}
}
module.exports = config;