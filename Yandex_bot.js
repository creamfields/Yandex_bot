// ==UserScript==
// @name         YandexBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bon_2
// @author       Pavel Polilov
// @match        https://yandex.ru/*
 //@match        https://ya.ru/*
// @grant        none
// ==/UserScript==


let keywords = ['как звучит кларнет', 'как звучит флейта'],
    keyword = keywords[getRandom(0, keywords.length)],
    links = document.links,
    btn = document.querySelector('.button_theme_search');


document.getElementsByName('text')[0].value = keyword;


if(btn !== null && btn !== undefined){
    btn.click();
} else{
    for(let i =0; i<links.length; i++){
        if (links[i].href.includes('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')){
            let link = links[i];
            link.click();
            break;
        }
    }
}

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
