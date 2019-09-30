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

const relativeNumber = window.relativeNumber || (function(){

	const moveSlideNumber = function (event) {
		const curNum = document.querySelector('.reveal > .slide-number')
		const newNum = document.querySelector(".reveal > * .slide-number");
		if (curNum && newNum ) {
			newNum.parentNode.replaceChild(curNum, newNum);
		}
	}

	const init = function () {
		moveSlideNumber();
	};

	return {
		init: init
	};

})();

Reveal.registerPlugin('relativenumber', relativeNumber);
/* global Reveal */