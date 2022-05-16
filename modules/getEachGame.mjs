import { gameStartDates } from '../modules/startDateInput.mjs';

export function getEachGame(data) {
	let drawData = data;
	console.log('get each game func');
	console.log(drawData);
	console.log(gameStartDates);
	let allGameArr = [];
	let allWinnerArr = [];
	let allWinnerNameArr = [];
	const totalGames = gameStartDates.length;
	let totalWinner = 0;

	gameStartDates.forEach((date, dindex) => {
		drawData.data.draw.forEach((draw, index) => {
			// check if draw date matches start date and return index if true
			if (draw.date === gameStartDates[dindex]) {
				console.log(
					'match ' + draw.date + ' ' + index + ' ' + gameStartDates[dindex]
				);
				allGameArr.push(index);
			} else {
				// console.log('no match ' + draw.date + ' ' + gameStartDates[dindex]);
			}
		});
		drawData.data.draw.forEach((draw, index) => {
			if (draw.winner != false) {
				console.log(
					'winner ' + draw.winner + ' ' + index + ' ' + gameStartDates[dindex]
				);
				allWinnerArr.push(index);
				allWinnerNameArr.push(draw.winner);
			} else {
			}
		});
	});
	// grab each starting date from array - gameStartDates.forEach
	// get index of the start dates
	// find next instance of winner = true in drawData
	// merge index for each game
	let gameDetArr = [];
	allGameArr.forEach((game, index) => {
		let gameObj = {
			game: index + 1,
			start: game,
			end: allWinnerArr[index],
			winner: allWinnerNameArr[index],
		};
		gameDetArr.push(gameObj);
	});
	let allGames = [];
	// map this Game data to array
	gameDetArr.forEach((game) => {
		let thisGame = [];
		let thisGameObj = { game: game.game, winner: game.winner };
		let start = game.start;
		let end = game.end;
		// let winner = game.winner;
		let diff = end - start;
		for (let i = start; i <= end; i++) {
			thisGame.push(drawData.data.draw[i]);
		}
		thisGameObj.draws = thisGame;
		allGames.push(thisGameObj);
	});
	return allGames;
}
