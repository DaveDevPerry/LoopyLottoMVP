import { gameStartDates } from '../modules/startDateInput.mjs';

export function getEachGame(data) {
	let drawData = data;
	console.log('get each game func');
	console.log(drawData);
	console.log(gameStartDates);
	let allGameArr = [];
	let allWinnerArr = [];
	const totalGames = gameStartDates.length;
	let gameNum = 0;
	gameStartDates.forEach((date, dindex) => {
		// console.log(date, dindex);
		drawData.data.draw.forEach((draw, index) => {
			// console.log(index + ' ' + draw.date + ' ' + draw.winner);

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
			if (draw.winner) {
				console.log(
					'winner ' + draw.winner + ' ' + index + ' ' + gameStartDates[dindex]
				);
				allWinnerArr.push(index);
			} else {
			}
		});

		// trying quicker version above
		// drawData.data.draw.forEach((draw, index) => {
		//   console.log(index + ' ' + draw.date + ' ' + draw.winner);

		// 	// check if draw date matches start date and return index if true
		// 	if (draw.date === gameStartDates[dindex]) {
		// 		console.log(
		// 			'match ' + draw.date + ' ' + index + ' ' + gameStartDates[dindex]
		//     );
		//     let thisGame = {gameNum: 0, startDate: '',index: 0};
		// 		// let startDate = draw.date;
		// 		// let startDateI = index;
		//     gameNum++;
		//     thisGame.gameNum = gameNum;
		//     thisGame.startDate = draw.date;
		//     thisGame.index = index;

		// 	} else {
		// 		console.log('no match ' + draw.date + ' ' + gameStartDates[dindex]);
		// 	}
		// });
	});
	// grab each starting date from array - gameStartDates.forEach
	// get index of the start dates
	// find next instance of winner = true in drawData
	console.log(allGameArr, allWinnerArr);

	// merge index for each game
	let gameDetArr = [];
	allGameArr.forEach((game, index) => {
		console.log(game);
		let gameObj = { game: index + 1, start: game, end: allWinnerArr[index] };
		console.log(gameObj);
		gameDetArr.push(gameObj);
	});
	let allGames = [];

	console.log(gameDetArr);
	// map this Game data to array
	gameDetArr.forEach((game) => {
		console.log(game);
		let thisGame = [];
		let thisGameObj = { game: game.game };
		let start = game.start;
		let end = game.end;
		let diff = end - start;
		for (let i = start; i <= end; i++) {
			thisGame.push(drawData.data.draw[i]);
		}
		console.log(thisGame);
		thisGameObj.draws = thisGame;
		console.log(thisGameObj);
		allGames.push(thisGameObj);
	});
	console.log(allGames);
	// get thisGame stats
	// grab container dom element

	// render thisGame html

	// look for game end (winner)
	// for (let i = index; i < drawData.data.draw.length; i++) {
	// 	console.log(index);
	// 	console.log(draw.winner);
	// }

	// drawData.data.draw.forEach((draw, index) => {
	// 	console.log(draw, index);
	// 	// check if draw date matches start date and return index if true
	// 	if (draw.date === gameStartDates[0]) {
	// 		console.log('match ' + draw.date + ' ' + gameStartDates[0]);
	// 	} else {
	// 		console.log('no match ' + draw.date);
	// 	}
	// });
}
