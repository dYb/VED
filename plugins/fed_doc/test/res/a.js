module.exports = {
	"get /test": function() {
		/**
		 * Test Title
		 *  some description
		 *
		 * @author ijse
		 * @async true
		 * @abcdfeg adkjf aeirjwi woef ofasdkf jhkasldjf klasjdkfl ask
		 * @param name username
		 * @param pass password
		 * @return success|fail
		 */
		this.render.text("hello ved");
	},
	"get /artical/list": function() {
		/**
		 * Test Title2
		 * some description
		 * @author  ijse
		 * @async false
		 */
		this.render.ftl("index", {
			"title": "hello",
			"message": "index page",
			"mylist": ["1", "2", "3"]
		});
	}
};