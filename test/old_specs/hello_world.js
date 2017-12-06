describe("Computaris Teste Suite", function() {
	it("Computaris Test Case",function() {
		return browser
		.url('https://duckduckgo.com/')
		.setValue('#search_form_input_homepage', 'WebdriverIO')
		.click('#search_button_homepage')
		.then(function(elem) {
			console.log('elem: ' + elem);
		})
		.getTitle().then(function(title) {
			console.log('Title is: ' + title);
			// outputs:
			// "Title is: WebdriverIO (Software) at DuckDuckGo"
		})
		.pause(10000);
	});
});
    
