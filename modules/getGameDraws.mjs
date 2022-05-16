import { gameStartDates } from './startDateInput.mjs';

export let numOfGameDraws = 0;
export function getGameDraws(draws) {
	let allDrawsInGame = [];
	let lastStartDate = gameStartDates.length;
	let startDate = gameStartDates[lastStartDate - 1];
	let startIndex;
	// grab all draws after thisGame
	draws.data.draw.forEach((draw, index) => {
		if (draw.date == startDate) {
			startIndex = index;
			// get start date and index
			// get all data after to new array
		}
	});
	// new array using start index
	for (let i = startIndex; i < draws.data.draw.length; i++) {
		let arr = [];
		arr.push(draws.data.draw[i].date);
		for (let j = 0; j < draws.data.draw[i].numbers.length; j++) {
			arr.push(draws.data.draw[i].numbers[j]);
		}
		arr.push(draws.data.draw[i].bonusBall);
		allDrawsInGame.push(arr);
	}
	numOfGameDraws = allDrawsInGame.length;
	return allDrawsInGame;
}
