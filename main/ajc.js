/**
 * Created by mroien on 10/14/15.
 */

var webdriver = require("selenium-webdriver");
var assert = require('assert');
var browser = new webdriver.Builder().forBrowser('chrome').build();

"use strict";

//  Page asserts
function homePage() {
    browser.getTitle().then(function(title) {
        assert.equal(
            "AJC.com: Atlanta News, Sports, Atlanta Weather, Business News | www.ajc.com",
            title, "You are not on the Home page");
        console.log('Home Page Title: ' + title);
    });
}

function lifePage(){
    browser.getTitle().then(function(title) {
        assert.equal(
            "Life | Atlanta lifestyle, people, health, travel | AJC | www.ajc.com",
            title, "You are not on the Life Page");
        console.log('Life Page Title: ' + title);
    });
}

function neighborPage(){
    browser.getTitle().then(function(title) {
        assert.equal(
            "Atlanta Neighborhoods | Atlanta GA | www.ajc.com",
            title, "You are not on the Things To Do Page");
        console.log("Neighbor Page Title: " + title)
    });
}

function jobsPage(){
    browser.getTitle().then(function (title) {
        assert.equal(
            "AJCJobs - Atlanta Jobs | www.ajc.com",
            title, "You are not on the Jobs Page");
        console.log("Jobs Page Title: " + title)
    })
}

function autoPage(){
    browser.getTitle().then(function (title) {
        assert.equal("Automation Jobs in Atlanta",
            title, "You are not on the automation monster Page");
        console.log("Automation Jobs Page Title: " + title)
    });
}

//  Find Elements
function findLifeLink(){
    return browser.findElement(webdriver.By.className('cm-section-life'));
}

function thingsToDo(){
    return browser.findElement({ className: 'cm-section-neighborhoods' });
}

function jobs(){
    return browser.findElement( {css: '[href="http://www.ajc.com/s/ajcjobs/"]'});
}

function searchBar(){
    return browser.findElement( {id: 'MNSwdgSkillsKeywords' }).sendKeys("automation");
}

function submit(){
    return browser.findElement( {id: "MNSwdgFormAction"}).click();
}

function email(){
    return browser.findElement( { id: "EmailAddressLitReg"});
}
function ajcJobs(){
    return browser.findElement( { id: 'ctl00_ctl00_ctl00_body_ctl00_imgHeaderLogo'});
}

function backHome(){
    return browser.findElement( {name: 'http://www.ajc.com'} );
}

//  Error Handling
function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
}

//  Close Browser
function closeBrowser() {
    console.log("Good Bye");
    browser.quit();
}

//  Drive script
browser.get("http://www.ajc.com").then(homePage);
browser.findElement(findLifeLink).click().then(lifePage);
browser.findElement(thingsToDo).click().then(neighborPage);
browser.findElement(jobs).click().then(jobsPage);
//browser.findElement(searchBar);
//browser.findElement(submit);
//browser.findElement(email).click().then(autoPage);
//browser.findElement(ajcJobs).click();
browser.findElement(backHome).click().then(homePage).then(closeBrowser, handleFailure);





