module.exports = {
	
	"local" : { 
		"brpwser" 		: "firefox",
		"url"			: "http://www.kevinlamping.com/webdriverio-course-content/",
		"timeout" 		: 10000,
		"hostAddres" 	: "localhost",
		"reporters" 	: ['dot', 'spec','json','allure'],
		"loglevel" 		: "silent",
		"reportPath" 	: ".",
		"allurereportPath" : "./reports/allure-results"
		
	},

	"prod" : {
		"browser" 	 	: "chrome",
		"url"		 	: "http://www.kevinlamping.com/webdriverio-course-content/",
		"timeout" 	 	: 10000,
		"hostAddres" 	: "localhost",
		"reporters"  	: ['allure', 'junit'],
		"loglevel"   	: "verbose",
		"reportPath" 	: ".",
		"allurereportPath" : "./reports/allure-results"
		
	}
	
}

