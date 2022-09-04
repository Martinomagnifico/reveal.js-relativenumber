
/*****************************************************************
 * @author: Martijn De Jongh (Martino), martijn.de.jongh@gmail.com
 * https://github.com/Martinomagnifico
 *
 * RelativeNumber.js for Reveal.js 
 * Version 1.0.2
 * 
 * @license 
 * MIT licensed
 *
 * Thanks to:
 *  - Hakim El Hattab, Reveal.js 
 ******************************************************************/


var Plugin = function Plugin() {
  var moveSlideNumber = function moveSlideNumber(deck) {
    var curNum = deck.getRevealElement().querySelector(".reveal > .slide-number");
    var newNum = deck.getRevealElement().querySelector(".reveal > * .slide-number");
    var newNumClassList = newNum.classList;

    if (curNum && newNum) {
      newNum.parentNode.replaceChild(curNum, newNum);
      curNum.classList = newNumClassList;
    }
  };

  var printSlideNumber = function printSlideNumber(deck) {
    var pages = deck.getRevealElement().querySelectorAll(".pdf-page");
    pages.forEach(function (page) {
      var section = page.querySelectorAll("section")[0];
      var curNum = section.getAttribute('data-slide-number');
      var newNums = page.querySelectorAll(".slide-number");

      if (curNum && newNums) {
        newNums.forEach(function (newNum) {
          newNum.innerHTML = curNum;
        });
      }
    });
  };

  var init = function init(deck) {
    deck.on('ready', function (event) {
      moveSlideNumber(deck);
    });
    deck.on('pdf-ready', function (event) {
      printSlideNumber(deck);
    });
  };

  return {
    id: 'relativenumber',
    init: init
  };
};

export { Plugin as default };
