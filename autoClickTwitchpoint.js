// ==UserScript==
// @name         Click on Twitch channel points
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      http://*
// @include      https://*
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{
    if(document.querySelector(".tw-button--success")!=null){
        document.querySelector(".tw-button--success").click();
       }
    },1000)
})();