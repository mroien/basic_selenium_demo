var webdriver = require("selenium-webdriver"),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var browser = new webdriver.Builder().forBrowser('chrome').build();

//navigates to website
browser.get("http://www.statesman.com");

browser.findElement(webdriver.By.name('q')).sendKeys("hello Tim");
browser.findElement(webdriver.By.className('sbico')).click();
//Alternative
browser.findElement({name: 'q'}).sendKeys(' What time is it?');
//Xpath
browser.findElement( {xpath: '//*[@id="rso"]/div[1]/div[1]/div/h3/a'}).click();
//getTitle
browser.getTitle().then(function(title) {
    console.log(title);
});
//Assert location
assertEquals("http://www.statesman.com", browser.getLocation());
//Quit driver
driver.quit();

//find help
    .help
//saves command
.save; name.js;