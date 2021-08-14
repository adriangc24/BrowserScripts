// ==UserScript==
// @name         Search duck duck go in google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      https://duckduckgo.com/?q=*
// @description  try to take over the world!
// @author       You
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = window.location.href;
    const elem = document.createElement(`li`);
    const termToSearch = document.getElementById("search_form_input").value
    const urlToSearch = 'https://www.google.com/search?q='+termToSearch.replaceAll(' ', '+');
    elem.className = `zcm__item`
    elem.innerHTML = `<a data-zci-link="web" class="zcm__link  js-zci-link  js-zci-link--web" href=${urlToSearch}>Search In Google</a>`;
    document.getElementById("duckbar_static").appendChild(elem)
})();