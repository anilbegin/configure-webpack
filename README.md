# configure-webpack
 configuring webpack with custom src and destination

watch: true  // or we can use npx webpack --watch to look for changes to the source file
	        // on the go

configuring webpack i.e using a custom source Folder and file,
instead of default folder 'src' and default file 'index.js'

also configuring webpack to create custom named bundled file and folder,
instead of dist/main.js

to configure webpack we create a file named webpack.config.js at the root.

Inside webpack.config.js, create object named module.exports with certain custom properties.