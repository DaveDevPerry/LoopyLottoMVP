import { gameStartDates } from './startDateInput.mjs';

export let numOfGameDraws = 0;
export function getGameDraws(draws) {
	// console.log(draws);
	// console.log(drawData);
	let allDrawsInGame = [];
	let lastStartDate = gameStartDates.length;
	let startDate = gameStartDates[lastStartDate - 1];
	let startIndex;
	// console.log(thisGame);
	// grab all draws after thisGame
	draws.data.draw.forEach((draw, index) => {
		// console.log(draw, index);
		// console.log(draw.date);
		if (draw.date == startDate) {
			// console.log('yes', draw.date, index);
			startIndex = index;
			// startTime = Date.parse(draw.date);
			// console.log(startTime);
			// get start date and index
			// get all data after to new array
		}
	});
	// new array using start index
	// console.log(draws);
	// console.log(draws.data.draw.length);
	for (let i = startIndex; i < draws.data.draw.length; i++) {
		// console.log(draws.data.draw[i]);
		let arr = [];
		arr.push(draws.data.draw[i].date);
		for (let j = 0; j < draws.data.draw[i].numbers.length; j++) {
			arr.push(draws.data.draw[i].numbers[j]);
		}
		arr.push(draws.data.draw[i].bonusBall);
		allDrawsInGame.push(arr);
	}
	// console.log(allDrawsInGame);
	numOfGameDraws = allDrawsInGame.length;
	return allDrawsInGame;
}
