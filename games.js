import { gameStartDates } from './modules/startDateInput.mjs';
import { renderGameHistoryTable } from './modules/getAllGamesData.mjs';

const gameHistoryBtn = document.querySelectorAll('.game-history-btn');
gameHistoryBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		document
			.querySelector('.game-history-container-modal')
			.classList.toggle('show-history');
	});
});

// console.log('games');
let allDrawData;
let allDrawsArr;
let drawsInEachGameArr = [];
let gameArr = [];

function storeDataFromFetch(draw, data) {
	allDrawData = data;
	allDrawsArr = draw;
	compileGames();
	createGameArr();
	// removeDuplicateNumbers()
}
function getDrawData() {
	// get the api data
	fetch('/JSON/draws.json', { cache: 'no-cache' })
		//convert it to json
		.then((result) => result.json())
		//access the data
		.then((data) => {
			storeDataFromFetch(data.draw, data);
		});
}

function compileGames() {
	// let drawsInEachGameArr = [];
	let singleGame = [];
	// loop until win - each loop add to game obj
	for (let i = 0; i < allDrawsArr.length; i++) {
		// console.log(i);
		if (allDrawsArr[i].winner === false) {
			singleGame.push(allDrawsArr[i]);
		}
		if (allDrawsArr[i].winner != false) {
			singleGame.push(allDrawsArr[i]);
			drawsInEachGameArr.push(singleGame);
			singleGame = [];
		}
	}
	// console.log(drawsInEachGameArr);
}

function createGameArr() {
	// let gameObj = {
	// 	gameNumber: '',
	// 	draws: '',
	// 	balls: [],
	// 	uniqueNumbers: [],
	// 	winner: '',
	// };
	drawsInEachGameArr.forEach((game, index) => {
		// console.log(drawsInEachGameArr);
		// console.log(game);
		let gameObj = {
			gameNumber: '',
			startDate: '',
			endDate: '',
			draws: '',
			balls: [],
			uniqueNumbers: [],
			winner: '',
			winnings: '',
		};
		gameObj.gameNumber = index + 1;
		gameObj.startDate = game[0].date;
		gameObj.endDate = game[game.length - 1].date;
		gameObj.draws = game.length;
		gameObj.winnings = 8 * game.length * 0.5;
		// console.log(game);
		game.forEach((draw) => {
			gameObj.balls.push(draw.bonusBall);
			gameObj.balls.push(...draw.numbers);
			draw.winner === false
				? (gameObj.winner = '')
				: (gameObj.winner = draw.winner);
		});
		// gameObj.winner = game.length.winner
		// console.log(gameObj);
		// let newGameObj = removeDuplicateNumbers(gameObj);

		gameArr.push(removeDuplicateNumbers(gameObj));
		// removeDuplicateNumbers(gameObj);

		// console.log(gameArr);
	});
	renderGameHistory();
}
function renderGameHistory() {
	const parentElement = document.querySelector('#game-history tbody');

	// console.log(gameArr);
	gameArr.forEach((game) => {
		const row = document.createElement('tr');
		const gameData = `
      <td>${game.gameNumber}</td><td>${game.startDate}</td>
			<td>${game.endDate}</td>
      <td>${game.draws}</td>
			<td>£${(game.winnings / 8).toFixed(2)}</td>
      <td>${game.winner}</td>
      <td>£${game.winnings}.00</td>
    `;
		row.innerHTML = gameData;
		parentElement.appendChild(row);
	});
}

function removeDuplicateNumbers(gameObj) {
	// console.log(gameObj.balls);
	gameObj.uniqueNumbers = [...new Set(gameObj.balls)];
	// console.log(gameObj);
	return gameObj;
}

getDrawData();

// console.log('users');
let allUserData;
let allUsersArr;

function storeUserDataFromFetch(user, data) {
	allUserData = data;
	allUsersArr = user;
	compilePlayers();
	// console.log(playerStatsArr);
}

function getUserData() {
	// get the api data
	fetch('/JSON/users.json', { cache: 'no-cache' })
		//convert it to json
		.then((result) => result.json())
		//access the data
		.then((data) => {
			// console.log(data);
			// testData.innerText = data;
			storeUserDataFromFetch(data.user, data);
			// sortAllSongs(allSongArr);
		});
}

function compilePlayers() {
	createPlayerObj(allUsersArr);
}

const playerStatsArr = [];

function createPlayerObj(arr) {
	// console.log(arr);
	arr.forEach((player) => {
		let participant = {};
		// console.log(player.firstName);
		participant.name = `${player.firstName} ${player.lastName}`;
		// console.log(player.numbers.balls);
		const ballsArr = player.numbers.balls;
		let playersNumbers = [];
		// console.log(ballsArr);
		ballsArr.forEach((ball) => {
			// console.log(ball.ball);
			playersNumbers.push(ball.ball);
		});
		participant.numbers = playersNumbers;
		// console.log(participant);
		playerStatsArr.push(participant);
	});
	return;
}

getUserData();

function compileGameData() {
	const totalGamesFinalised = gameStartDates.length;
	// console.log(totalGamesFinalised);
	const gameStartDatesArr = gameStartDates;
	// console.log(gameStartDatesArr);

	// work out no of draws in each game
	const arr = getAllDrawsInOneGame(gameStartDatesArr);
	// console.log(arr);
}

function getAllDrawsInOneGame(arr) {
	// console.log(arr);
	// const convertDatesFromString = []
	let newArr = arr.map(function (string) {
		let fields = string.split('/');
		let day = fields[0];
		let month = fields[1];
		let year = fields[2];
		let newDateString = `${month}/${day}/${year}`;
		return newDateString;
	});

	// console.log(convertedDatesFromStringArr);
	// let datesFromStringArr = convertedDatesFromStringArr.map(function (string) {
	// 	return console.log(string, new Date(string).getTime(), Date.parse(string));

	// });

	let lastDrawDateInGame = [];
	for (let i = 0; i < newArr.length; i++) {
		// console.log(newArr[i]);
		let gameObj = {
			game: i + 1,
			startDate: newArr[i],
		};
		// if (i !== 0 && new Date(newArr[i]).getDay() === 3) {
		// 	console.log(newArr[i], 'is wednesday');
		// }
		// if (i !== 0 && new Date(newArr[i]).getDay() === 6) {
		// 	console.log(newArr[i], 'is saturday');
		// }
		// if (i === 0) {
		// 	console.log('first date');
		// }
		let nextGameStartDate = new Date(newArr[i + 1]);
		// console.log(nextGameStartDate);
		// console.log(
		// 	new Date(nextGameStartDate.setDate(nextGameStartDate.getDate() - 2))
		// );

		// let lastDateInGame = new Date(
		// 	nextGameStartDate.setDate(nextGameStartDate.getDate() - 2)
		// );

		// console.log(nextGameStartDate.getDay());
		// console.log(lastDateInGame.getDay());
		if (nextGameStartDate.getDay() !== 3 && nextGameStartDate.getDay() !== 6) {
			// console.log('error');
		}
		if (nextGameStartDate.getDay() === 3) {
			// console.log(
			// 	new Date(nextGameStartDate.setDate(nextGameStartDate.getDate() - 4))
			// );
			// console.log(
			// 	new Date(
			// 		nextGameStartDate.setDate(nextGameStartDate.getDate() - 4)
			// 	).toLocaleDateString()
			// );
			gameObj.endDate = new Date(
				nextGameStartDate.setDate(nextGameStartDate.getDate() - 4)
			).toLocaleDateString();
		}
		if (nextGameStartDate.getDay() === 6) {
			// console.log(
			// 	new Date(nextGameStartDate.setDate(nextGameStartDate.getDate() - 3))
			// );
			gameObj.endDate = new Date(
				nextGameStartDate.setDate(nextGameStartDate.getDate() - 3)
			).toLocaleDateString();
		}
		// gameObj.lastDate = lastDateInGame.toLocaleDateString();
		// console.log(lastDateInGame.toLocaleDateString());
		// console.log(
		// 	new Date(nextGameStartDate.setDate(nextGameStartDate.getDate() - 30))
		// );

		// new Date(newnewArr[i+1]).getDay() === 3 ? console.log(new Date(newArr[i+1]))
		// console.log(gameObj);
	}
}

// Returns an array of dates between the two dates
function getDates(startDate, endDate) {
	const dates = [];
	let currentDate = startDate;
	const addDays = function (days) {
		const date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	};
	while (currentDate <= endDate) {
		dates.push(currentDate);
		currentDate = addDays.call(currentDate, 1);
	}
	return dates;
}

// Usage
// const dates = getDates(new Date(2013, 10, 22), new Date(2013, 11, 25));
// dates.forEach(function (date) {
// 	console.log(date);
// });

// compileGameData();

// let allGameData;
// let allGamesArr;
// function storeGameDataFromFetch(game, data) {
// 	// console.log(data);
// 	allGameData = data;
// 	allGamesArr = game;
// 	// console.log(allGamesArr);
// 	// console.log(allGameData);
// 	// sortAllSongs(allSongArr);
// 	compileGames();
// 	// console.log(playerStatsArr);
// }
// // working promise

// function compileGames() {
// 	// createPlayerObj(allGamesArr);
// }

// function getGameData() {
// 	// get the api data
// 	fetch('/JSON/Games.json', { cache: 'no-cache' })
// 		//convert it to json
// 		.then((result) => result.json())
// 		//access the data
// 		.then((data) => {
// 			// console.log(data);
// 			// testData.innerText = data;
// 			storeGameDataFromFetch(data.Game, data);
// 			// sortAllSongs(allSongArr);
// 		});
// }
// getUserData();
