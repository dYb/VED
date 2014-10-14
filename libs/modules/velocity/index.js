/**
 * interface with expressjs
 *
 * @author : dYb
 */
var path = require("path");
var path_normalize = path.normalize;
var VmxEngine = require("vmx").Engine;
var vmMacro = {}

// vm Renderer
// ===========
// @param tpl    - velocity template name, without .vm
// @param data   - data model
function vmRender(res) {
    return function(tpl, data) {
        res.set('Content-Type', 'text/html');
        res.render(tpl + '.vm', data);
    };
}

var renderFile = function (path, options, fn) {
	var viewPath = path_normalize(options.settings.views);
	path = path_normalize(path);

	var engine = new VmxEngine({
		root: viewPath,
		template: path,
		macro: vmMacro
	});
	try {
	  var result = engine.render(options);
	  fn(null, result);
	} catch (e) {
	  console.log(e.stack);
		fn(e.stack)
	};

}

// init
// =====
// Bind event to plugin
exports.init = function(configs) {
	vmMacro = path.resolve(configs.macroDir, configs.macro) || {};
	// Regist render engine to app
	Hub.on("localServer.renderEngine.regist", function(param){
		app = param.app;
		app.engine('vm', renderFile);
		// add render hook
		app.get("render manager").add('vm', vmRender)
	})

	return {
		renderFile: renderFile
	}

};