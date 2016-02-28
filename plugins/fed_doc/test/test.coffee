###
#	Test ved_doc
#	@author: ijse
###

fs = require "fs"
path = require "path"

should = require("chai").should()
vedDoc = require "../index.coffee"

describe "FED_DOC", ->
	it "Should get export html file", ->
		srcFolder = "#{__dirname}/res"
		destFile = "#{__dirname}/testOut.html"
		objList = vedDoc.makeDoc(srcFolder, destFile)
		path.existsSync(destFile).should.ok