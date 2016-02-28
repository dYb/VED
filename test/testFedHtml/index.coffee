
vedhtml = require "../../libs/modules/vedHtml"

describe "libs/modules/vedHtml", ->
	it "Parse ejs to htmls by config.json", ()->
		vedhtml.exec {
			configFile: __dirname + "/res/config.coffee"
		}