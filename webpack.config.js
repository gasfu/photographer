const path = require('path'),
      webpack = require('webpack');

module.exports = {
	entry: {
		app: "path.join(__dirname, '/app/app.js')"
	},

	output: {
		path: path.join(__dirname, '/public/dist'),
		filename: 'application.min.js'
	},

	devServer: {
	    inline: true,
	    contentBase: './public/',
	    port: 8082,
	    historyApiFallback: true
	},

	watch: true
}