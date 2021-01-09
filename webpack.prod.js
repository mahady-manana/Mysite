const path = require('path')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/build'),
        filename: 'bundle.js',
        publicPath: "/build/"
    },
    module: {
        rules: [
			{
				test : /\.(js|jsx)$/,
				exclude : /node_modules/,
				use : [
					'babel-loader'
				]
			},
			{
				test : /\.(css|scss)$/,
				use : [
					'style-loader',
					'css-loader'
				]
			},
			{
				test : /\.(png|jpg|gif|svg)$/,
				use : [
					'file-loader'
				]
			},
			{
				test : /\.(woff|woff2|eot|ttf|otf)$/,
				loader : 'file-loader',
				options : {
					name : '[name][hash].[ext]'
				}
			}
        ]
    }
}

module.exports = config
