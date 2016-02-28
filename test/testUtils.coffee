
vedUtils = require("../libs/utils")


##TODO: COVER ALL APIs

describe "vedUtils", ()->
	it "#traverseFolderSync()", ()->
		vedUtils.traverseFolderSync __dirname + "/res", ()->
