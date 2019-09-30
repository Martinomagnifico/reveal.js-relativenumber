/*****************************************************************
 * @author: Martijn De Jongh (Martino), martijn.de.jongh@gmail.com
 * https://github.com/Martinomagnifico
 *
 * relativeNumber.js for Reveal.js 1.0.0
 *
 * @license 
 * MIT licensed
 *
 * Thanks to:
 *  - Hakim El Hattab, Reveal.js
******************************************************************/
const relativeNumber=window.relativeNumber||{init:function(){!function(e){const r=document.querySelector(".reveal > .slide-number"),n=document.querySelector(".reveal > * .slide-number");r&&n&&n.parentNode.replaceChild(r,n)}()}};Reveal.registerPlugin("relativenumber",relativeNumber);