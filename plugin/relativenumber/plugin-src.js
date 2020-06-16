
const Plugin = () => {

	const moveSlideNumber = function (deck) {

		const curNum = (deck.getRevealElement()).querySelector(".reveal > .slide-number")
		const newNum = (deck.getRevealElement()).querySelector(".reveal > * .slide-number");

		if (curNum && newNum ) {
			newNum.parentNode.replaceChild(curNum, newNum);
		}
	}

	const init = function (deck) {
		deck.on( 'ready', event => { moveSlideNumber(deck) } );
	};

	return {
		id: 'relativenumber',
		init: init
	};
};

export default Plugin;