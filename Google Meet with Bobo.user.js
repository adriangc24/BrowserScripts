// ==UserScript==
// @name         Google Meet with Bobo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      https://meet.google.com/*
// @description  try to take over the world!
// @author       You
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = window.location.href;
    if(!currentUrl.endsWith("?authuser=7")){
      window.location.href = currentUrl + "?authuser=7";
    }
})();