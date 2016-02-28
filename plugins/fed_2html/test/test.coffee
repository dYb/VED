
should = require("chai").should()

ved2html = require "../index"

describe "Fed_2html", ->
	it "处理简单EJS模板文件", (done)->
		opts = ved2html.resolveConfig "./config.json"
		ved2html.doParse opts, (a,b)->
			done(a)
