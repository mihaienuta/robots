var expect = require('chai').expect;


describe('Robots Suite 2 - purchase', function() {

  browser.addCommand("isNotDisplayed", function(value) {
      var exists = browser.isVisible(value)
      if (exists == true) { return false }
              else { return true }
          }, 1500, "Element is visible.")

  beforeEach(function(){
    //browser.url('http://www.kevinlamping.com/webdriverio-course-content/')
    //var url = browser.getUrl()
    //console.log("URL is:" + url)
    //expect(url).to.equal('http://www.kevinlamping.com/webdriverio-course-content/');
  })

  it('Open the browser', function()
  {
	  browser.url('http://www.kevinlamping.com/webdriverio-course-content/');
  });
  
  it('Go to Products page', function() 
  {
		browser.click('ul.menu.dropdown a[href="#"]');
		browser.click('ul[role="menu"] li:nth-child(1)');
		
  });
  
  it('Select Robot Model and Quantity', function()
  {
		//browser.click('#robotType');
		//browser.click('#robotType [value="husker"]');
		browser.selectByValue('#robotType','husker');
		browser.setValue('div[class="small-9 columns"] input', 15);
		
  })
  
  it('Purchase Robots', function()
  {
		var button_enabled = browser.isEnabled('#buyNowButton');
		expect(button_enabled).to.equal(true);
		
		// click purchase
		browser.click('#buyNowButton');
		
  })
  
  it('Verify Purchase is successful', function()
  {
		
		// verify that text is purchasing
		var button_text = browser.getText('#buyNowButton');
		expect(button_text).to.equal('Purchasing...');
		browser.waitUntil(function () {
			return browser.getText('#buyNowButton') === 'Buy Now'
		}, 5000, 'Button Purchase did not change to Buy Now.');
		
		var button_enabled = browser.isEnabled('#buyNowButton');
		expect(button_enabled).to.equal(false);
		var callout = browser.getText('div[class="callout"]');
		//var callout = browser.getText('div.callout');
		expect(callout).to.include('Thank you human for your purchase');
		
		browser.waitForVisible('button[class="close-button"] span');
		
  })
  
  it('Close Notification', function()
  {
		// close notification
		browser.click('button[class="close-button"] span');
  })
	
  it('Verify Notification is Closed', function()
  {
		browser.waitUntil(function () {
			return browser.isExisting('div[class="callout"]') === false
		}, 5000, 'Notification did not dissapear.');
		
		var exists = browser.isExisting('div[class="callout"]')
		expect(exists).to.equal(false);
		
  })
  

});