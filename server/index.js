require("babel-register")({
	babelrc: false,
	presets: [["env",{
		node:"current"
	}]]
})
require("./main")