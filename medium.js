// ==UserScript==
// @name         Medium
// @namespace    raymond876
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://medium.com/*
// @match        https://itnext.io/*
// @match        https://blog.gojekengineering.com/*
// @match        https://towardsdatascience.com/* 
// @require      https://code.jquery.com/jquery-2.1.1.min.js
// @updateURL    https://raw.githubusercontent.com/anmorel/TamperMonkeyScript/master/medium.js
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;

    var link = $('#paywall-background-color h4 #paywall-upsell-button-upgrade a');
    if ( typeof link !== "undefined" && link) {
        link.html("Show FREE")
        link.click(function(){
            GM_openInTab(window.location.href, {
                incognito: true
            })
            return false;
        });
    }
})();
