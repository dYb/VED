var sassMiddleware = require("sass-middleware");
var os = require("os");
var express = require("express");
var path = require("path");

exports.init = function(config) {
	var sassCfg = {
		dest: config.dest,
		force: config.force || {},
		useTmpDir: config.useTmpDir || false,
		// paths: "",
		// prefix: "",
		optimization: config.optimization || 1,
		debug: config.debug || true,
		compress: config.compress || false,
		dumpLineNumbers: config.dumpLineNumbers || "mediaquery"
	};

	//TODO: MERGE sassCfg and config

	this.on("appinit2", function(app) {
		// console.log("-----run sass middleware-----");
		sassCfg.src = app.get("static resource");
		if(config.useTmpDir) {
			sassCfg.dest = path.join(os.tmpDir(), "tmp_fed_sass");
		} else if(!sassCfg.dest) {
			sassCfg.dest = sassCfg.src;
		}
		app.use(sassMiddleware(sassCfg));
		if(sassCfg.useTmpDir) {
			app.use(express["static"](sassCfg.dest));
		}
	});
};