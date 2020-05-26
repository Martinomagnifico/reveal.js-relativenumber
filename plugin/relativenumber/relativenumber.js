
/*****************************************************************
 * @author: Martijn De Jongh (Martino), martijn.de.jongh@gmail.com
 * https://github.com/Martinomagnifico
 *
 * RelativeNumber.js for Reveal.js 
 * Version 1.0.1
 * 
 * @license 
 * MIT licensed
 *
 * Thanks to:
 *  - Hakim El Hattab, Reveal.js 
 ******************************************************************/


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.RelativeNumber = factory());
}(this, (function () { 'use strict';

	var Plugin = function Plugin() {
	  var moveSlideNumber = function moveSlideNumber(deck) {
	    var curNum = deck.getRevealElement().querySelector(".reveal > .slide-number");
	    var newNum = deck.getRevealElement().querySelector(".reveal > * .slide-number");

	    if (curNum && newNum) {
	      newNum.parentNode.replaceChild(curNum, newNum);
	    }
	  };

	  var init = function init(deck) {
	    deck.on('ready', function (event) {
	      moveSlideNumber(deck);
	    });
	  };

	  return {
	    id: 'relativenumber',
	    init: init
	  };
	};

	return Plugin;

})));
