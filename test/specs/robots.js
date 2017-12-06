var expect = require('chai').expect;
describe('Robots Suite1', function() {

  browser.addCommand("isNotDisplayed", function(value) {
      var exists = browser.isVisible(value)
      if (exists == true) { return false }
              else { return true }
          }, 1500, "<div> for 1st FAQ option is still there")

  beforeEach(function(){
    browser.url('http://www.kevinlamping.com/webdriverio-course-content/')
    var url = browser.getUrl()
    console.log("URL is:" + url)
    expect(url).to.equal('http://www.kevinlamping.com/webdriverio-course-content/');
  })

  it('Test FAQ height', function() {

      var height = browser.getCssProperty('ul.accordion', 'height')
      console.log("FAQ height is:" + height.parsed.value);
      expect(height.parsed.value).to.be.above(210)

  });

  it('Test FAQ 1st option expanded', function() {

      var option1 = browser.getText('ul.accordion li.accordion-item:nth-of-type(1) div')
      expect(option1).to.equal('Yes, we require all customers to be of the metal type.')

  });

  it('Test FAQ 2nd option expanded', function() {
      // Click on second FAQ option and verify string
	  browser.debug();
      browser.click('ul.accordion li.accordion-item:nth-of-type(2)')
      var option2 = browser.getText('ul.accordion li.accordion-item:nth-of-type(2) div')
      expect(option2).to.include('Pshhhkkkkkkrrrrkakingkakingkakingtshchchchchchchchcch')

      //check that 1st FAQ option is not visible anymore
      //var old_opt1 = browser.getAttribute('ul.accordion li.accordion-item:nth-of-type(1) div', 'aria-hidden')
      //expect(old_opt1).to.equal('true')
      browser.isNotDisplayed('ul.accordion li.accordion-item:nth-of-type(1) div')
        });

});