module.exports = {
	
	"local" : { 
		"brpwser" 		: "chrome",
		"url"			: "http://www.kevinlamping.com/webdriverio-course-content/",
		"timeout" 		: 10000,
		"hostAddres" 	: "localhost",
		"reporters" 	: ['dot', 'spec','json','allure'],
		"loglevel" 		: "silent",
		"reportPath" 	: "./reports",
		
	},

	"prod" : {
		"browser" 	 	: "chrome",
		"url"		 	: "http://www.kevinlamping.com/webdriverio-course-content/",
		"timeout" 	 	: 10000,
		"hostAddres" 	: "localhost",
		"reporters"  	: ['allure', 'junit'],
		"loglevel"   	: "verbose",
		"reportPath" 	: "./reports",
		"allurereportPath" : "./reports/allure-results"
		
	}
	
}

