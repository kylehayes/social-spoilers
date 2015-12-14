// ==UserScript==
// @name          Social Spoilers
// @namespace     http://justingarrison.com
// @description   Hide spoilers on twitter
// @include       http://www.twitter.com/
// @version       0.1
// ==/UserScript==

// Regex to match what I need /\^[a-zA-Z0-9:.,?! ]+[^#|^|@|\$]/g

// Samples to match 
// <p class="js-tweet-text tweet-text">RT <a href="/NetAppGeek" class="twitter-atreply pretty-link" dir="ltr" >
// <s>@</s>
// <b>NetAppGeek</b></a> I enjoy ^filenames with the dotted circle ( ? ) the interrobang ( ? ) and^ my fave: irony punctuation ( ? ) &lt; This = The worst!</p>
//
// <p class="js-tweet-text tweet-text">RT <a href="/NetAppGeek" class="twitter-atreply pretty-link" dir="ltr" >
// This is a test that should hide ^To the end of the line.
//
// <p class="js-tweet-text tweet-text">RT <a href="/NetAppGeek" class="twitter-atreply pretty-link" dir="ltr" >
// Begining of the line^ spoiler match!
// 
// Snape ^killed dumbledore^
//
// Darth Vader ^is Luke's father^!
//
// Can you believe ^Bruce Wilis was dead the whole time?!
//
// ^TYLER DURDEN DOESN’T EXIST^
//
// Save all tweets
a = $('.stream-container li[id|="stream-item-tweet"]')

// read tweet content
a.each(function() {
  var text = $(this).find('div > div.content > p').text()
  if(text.match(/\^.+\^/)) {
    var newText = text.replace(/\^.+\^/, 'twitter')
    $(this).find('div > div.content > p').text(newText)
  }
}
)
