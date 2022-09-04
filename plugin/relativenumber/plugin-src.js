
const Plugin = () => {

	const moveSlideNumber = function (deck) {

		let curNum = (deck.getRevealElement()).querySelector(".reveal > .slide-number");
		let newNum = (deck.getRevealElement()).querySelector(".reveal > * .slide-number");
		let newNumClassList = newNum.classList;

		if (curNum && newNum ) {
			newNum.parentNode.replaceChild(curNum, newNum);
			curNum.classList = newNumClassList;
		}
	}
	const printSlideNumber = function (deck) {
			let pages = deck.getRevealElement().querySelectorAll(".pdf-page");
			
			pages.forEach(page => {
				let section = page.querySelectorAll("section")[0];
				let curNum = section.getAttribute('data-slide-number');
				let newNums = page.querySelectorAll(".slide-number");

				if ( curNum && newNums ) {
					newNums.forEach(newNum => {
						newNum.innerHTML = curNum
					});
				}
			});
	}

	const init = function (deck) {
		deck.on( 'ready', event => { moveSlideNumber(deck) } );
		deck.on( 'pdf-ready', event => { printSlideNumber(deck) } );
	};

	return {
		id: 'relativenumber',
		init: init
	};
};

export default Plugin;