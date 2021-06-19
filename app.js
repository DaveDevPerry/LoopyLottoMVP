import { getDate } from './modules/date.mjs';
import { countdownTimer } from './modules/countdownTimer.mjs';
import { gameStartDates } from './modules/daveToInput.mjs';
import { getGameDraws } from './modules/getGameDraws.mjs';
import { renderGameDraws } from './modules/renderGameDraws.mjs';
import { getUniqueBalls } from './modules/getUniqueBalls.mjs';
import { generatePlayers } from './modules/generatePlayers.mjs';
import { sortByBallTotal } from './modules/sortByBallTotal.mjs';
import { renderGameTable } from './modules/renderGameTable.mjs';
import { renderBallsDrawn } from './modules/renderBallsDrawn.mjs';
import { renderBallsMatched } from './modules/renderBallsMatched.mjs';
import { getBallData } from './modules/getBallData.mjs';

// global

// player
let userData;
let allPlaying;
let notPlaying = [];
// draw
export let drawData;
export let allBallsDrawn;
// let allDrawsInGame = [];
// let uniqueBalls;
// let uniqueBallsInGame = [];

// EVENTS

// window.onload = function () {
// 	setTimeout(() => {
// 		document.querySelector('.loader-container').style.display = 'none';
// 		document.querySelector('#intro').play();
// 	}, 2000);
// };
window.onload = function () {
	document.querySelector('#intro').play();
};
document.querySelector('#date').innerText = getDate();
document.querySelector('#game-number').innerText = gameStartDates.length;
document.querySelector('#hamburger-unique').addEventListener('click', (e) => {
	e.target.parentElement.classList.toggle('grow-menu');
	const audio = new Audio('./audio/Large_Bubble-SoundBible.com.mp3');
	audio.play();
	document.querySelectorAll('.menu-links p').forEach((link) => {
		link.addEventListener('click', () => {
			const audio = new Audio('./audio/A-Tone-His_Self.mp3');
			audio.play();
		});
	});
});

countdownTimer();

// *************************
// JSON
/// drawData ************************************************************

function loadDrawJSON(path, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				if (success) success(JSON.parse(xhr.responseText));
			} else {
				if (error) error(xhr);
			}
		}
	};
	xhr.open('GET', path, true);
	xhr.send();
}
let drawUrl = './JSON/draws.json';
let dData = function (data) {
	// console.log(data);
	// console.log(typeof data);
	drawData = { data };
};
let dError = function (xhr) {
	console.error(xhr);
};
loadDrawJSON(drawUrl, dData, dError);

/// userData ************************************************************
function loadUserJSON(path, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				if (success) success(JSON.parse(xhr.responseText));
			} else {
				if (error) error(xhr);
			}
		}
	};
	xhr.open('GET', path, true);
	xhr.send();
}
let userUrl = './JSON/users.JSON';
let jdata = function (data) {
	// console.log(data);
	// console.log(typeof data);
	userData = { data };
};
let jerror = function (xhr) {
	console.error(xhr);
};
loadUserJSON(userUrl, jdata, jerror);

// START **************************************************************************
// below is the userdata testing
setTimeout(() => {
	// generate current game draw data
	allBallsDrawn = getBallData(drawData);
	console.log(allBallsDrawn);
	// getGameDraws(drawData);
	let uniqueBalls = getUniqueBalls(renderGameDraws(getGameDraws(drawData)));
	// console.log(uniqueBalls);

	// get all current game draws
	// let gameDraws = drawHistory;
	// console.log(gameDraws);
	// get all unique numbers
	// let uniqueBalls = getUniqueNumbers();
	// console.log(uniqueBalls);
	// foreach user do the following - forEach

	// *********************************************************
	// ignore for now
	userData.data.user.forEach((user, index) => {
		console.log(user);
		console.log(user.numbers.balls);

		let ballsMatched = 0;
		// 1 check player for duplicate numbers
		// 2 check if playing. if no then next player
		if (user.isPlaying === false) {
			console.log(user.firstName + ' is not playing');
			console.log(user);
			console.log(index);
			notPlaying.push(user.firstName);
			// userData.data.user.splice(index, 1);
		} else if (user.isPlaying === true) {
			console.log(user.firstName + ' is playing');
			// check if match with player ball , if so update userData object

			user.numbers.balls.forEach((ball) => {
				console.log(ball.ball);

				if (uniqueBalls.includes(ball.ball)) {
					console.log('match ' + ball.ball);
					ball.drawn = true;
					ballsMatched++;
				} else {
					console.log('no match ' + ball.ball);
				}
			});
			user.numbers.totalDrawn = ballsMatched;
			user.sort = ballsMatched;
			console.log(user.numbers.totalDrawn);
			allPlaying = userData.data.user;
			console.log(allPlaying);
			console.log(allPlaying[1]);
		} else {
			alert('error');
		}
		console.log(userData.data.user);

		console.log(allPlaying);
		console.log(allPlaying.firstName);
	});
	// console.log(allPlaying);
	// console.log(typeof allPlaying);
	// console.log(notPlaying);
	// console.log(allPlaying[1]);
	// // remove not playing
	// allPlaying.forEach((user, index) => {
	// 	console.log(user);
	// 	console.log(allPlaying[index]);
	// 	console.log(allPlaying[1]);
	// 	console.log(typeof allPlaying);
	// 	console.log(typeof allPlaying[1]);
	// 	if (notPlaying.includes(user.firstName)) {
	// 		// allPlaying.splice(user);
	// 		console.log('match' + allPlaying[index]);
	// 	}
	// });
	// console.log(allPlaying);
	// console.log(allPlaying[1]);
	// **************************************************************

	// console.log(allPlaying.numbers.totalDrawn);
	// sort players by total numbers matched
	// still to come
	// getUniqueBalls(renderGameDraws(getGameDraws(drawData)));
	renderGameTable(sortByBallTotal(generatePlayers(allPlaying)));
	renderBallsDrawn(uniqueBalls);
	renderBallsMatched(uniqueBalls);

	// console.log(playerArr);
	// sortByBallTotal(playerArr);
	// console.log(playerArr);
	// renderGameTable();
	// renderBallsMatched();
	// getPlayersPlaying(playerArr);
	// to the dom
	// renderPlayerTable(allPlaying);
	// all above here
	console.log(userData);
}, 1000);

// function generatePlayers(arr) {
// 	console.log(arr);
// 	arr.forEach((user) => {
// 		let arr = [];
// 		if (user.isPlaying) {
// 			arr.push(user.firstName);
// 			arr.push(user.lastName);
// 			user.numbers.balls.forEach((ball) => {
// 				arr.push(ball.ball);
// 			});
// 			arr.push(user.numbers.totalDrawn);
// 			playerArr.push(arr);
// 		} else {
// 			console.log('not playing');
// 		}
// 	});
// 	console.log(playerArr);
// }
// function sortByBallTotal(arr) {
// 	console.log(arr);
// 	playerArr.sort(function (a, b) {
// 		console.log(a[12]);
// 		console.log(b);
// 		return b[12] - a[12];
// 	});
// 	console.log(playerArr);
// }
// function renderGameTable() {
// 	console.log(playerArr);
// 	// console.log(arr);
// 	// get dom elements
// 	const table = document.querySelector('#current-game-players-table');
// 	// creates the thead row
// 	const thead = document.createElement('tr');
// 	const html = `
// 	<th>Player Name</th><th colspan="10">Player Numbers</th><th>Total</th>
// 	`;
// 	thead.innerHTML = html;
// 	table.appendChild(thead);
// 	// loop through each player
// 	// loop through each player playing
// 	for (let i = 0; i < playerArr.length; i++) {
// 		// console.log(arr[i]);
// 		const row = document.createElement('tr');
// 		row.classList.add('player-playing');
// 		row.classList.add('highlight');
// 		// data needed
// 		// create td - name
// 		let name = document.createElement('td');
// 		let nameData = `${playerArr[i][0]} ${playerArr[i][1]}`;
// 		name.innerHTML = nameData;
// 		row.appendChild(name);
// 		// create td - numbers
// 		for (let j = 2; j < 12; j++) {
// 			let num = document.createElement('td');
// 			num.classList.add('ball');
// 			let numData = playerArr[i][j];
// 			if (numData < 10) {
// 				numData = `0${numData}`;
// 			} else {
// 				numData = playerArr[i][j];
// 			}
// 			num.innerText = numData;
// 			row.appendChild(num);
// 		}
// 		let total = document.createElement('td');
// 		let value = playerArr[i][12];
// 		total.innerText = value;
// 		row.appendChild(total);
// 		table.appendChild(row);
// 	}
// }

// function renderBallsMatched() {
// 	let balls = document.querySelectorAll('.ball');

// 	console.log(uniqueBalls);
// 	balls.forEach((ball) => {
// 		// console.log(ball);
// 		// console.log(parseInt(ball.innerText));
// 		if (uniqueBalls.includes(parseInt(ball.innerText))) {
// 			ball.classList.add('ball-matched');
// 		}
// 	});
// }
// function getGameDraws(draws) {
// 	console.log(draws);
// 	console.log(drawData);
// 	let lastStartDate = gameStartDates.length;
// 	let startDate = gameStartDates[lastStartDate - 1];
// 	let startIndex;
// 	// console.log(thisGame);
// 	// grab all draws after thisGame
// 	drawData.data.draw.forEach((draw, index) => {
// 		// console.log(draw, index);
// 		// console.log(draw.date);
// 		if (draw.date == startDate) {
// 			console.log('yes', draw.date, index);
// 			startIndex = index;
// 			// startTime = Date.parse(draw.date);
// 			// console.log(startTime);
// 			// get start date and index
// 			// get all data after to new array
// 		}
// 	});
// 	// new array using start index
// 	console.log(drawData);
// 	console.log(drawData.data.draw.length);
// 	for (let i = startIndex; i < drawData.data.draw.length; i++) {
// 		console.log(drawData.data.draw[i]);
// 		let arr = [];
// 		arr.push(drawData.data.draw[i].date);
// 		for (let j = 0; j < drawData.data.draw[i].numbers.length; j++) {
// 			arr.push(drawData.data.draw[i].numbers[j]);
// 		}
// 		arr.push(drawData.data.draw[i].bonusBall);
// 		allDrawsInGame.push(arr);
// 	}
// 	console.log(allDrawsInGame);
// 	return allDrawsInGame;
// }
// function getUniqueBalls(arr) {
// 	console.log(arr);
// 	let allBalls = [];
// 	arr.forEach((draw) => {
// 		for (let i = 1; i < draw.length; i++) {
// 			allBalls.push(draw[i]);
// 		}
// 	});
// 	// console.log(allBalls);
// 	// [...new Set(allBalls)];
// 	console.log(allBalls);
// 	let unique = new Set(allBalls);
// 	uniqueBallsInGame = [...unique];
// 	console.log(uniqueBallsInGame);
// 	return uniqueBallsInGame;
// }
// function renderGameDraws(arr) {
// 	// document.querySelector('#game-number').innerText = gameStartDates.length;
// 	console.log(arr);
// 	let reversed = arr.reverse();
// 	console.log(reversed);
// 	// reder metrics
// 	document.querySelector('#game-start-date').innerText =
// 		reversed[reversed.length - 1][0];
// 	document.querySelector('#game-last-updated').innerText = reversed[0][0];
// 	document.querySelector('#game-draws').innerText = arr.length;
// 	// render table
// 	const table = document.querySelector('#game-draw-history-table');
// 	const thead = document.createElement('tr');
// 	const html = `
// <th>Draw Date</th><th colspan="6">Numbers Drawn</th><th>Bonus Ball</th>
// `;
// 	thead.innerHTML = html;
// 	table.appendChild(thead);
// 	for (let i = 0; i < reversed.length; i++) {
// 		const row = document.createElement('tr');
// 		row.classList.add('game-draw');
// 		row.classList.add('highlight');
// 		for (let j = 0; j < reversed[i].length; j++) {
// 			let cell = document.createElement('td');
// 			let textNode;
// 			if (reversed[i][j] < 10 && reversed[i][j] > 0) {
// 				let num = '0';
// 				textNode = document.createTextNode(num + reversed[i][j]);
// 			} else {
// 				textNode = document.createTextNode(reversed[i][j]);
// 			}
// 			cell.appendChild(textNode);
// 			row.appendChild(cell);
// 			table.appendChild(row);
// 		}
// 	}
// }
// working
// function renderPlayerTable(arr) {
// 	console.log(arr);
// 	// get dom elements
// 	const table = document.querySelector('#current-game-players-table1');
// 	// creates the thead row
// 	const thead = document.createElement('tr');
// 	const html = `
// 	<th>Player Name</th><th colspan="10">Player Numbers</th><th>Total</th>
// 	`;
// 	thead.innerHTML = html;
// 	table.appendChild(thead);
// 	// loop through each player

// 	// loop through each player playing
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 		const row = document.createElement('tr');
// 		row.classList.add('player-playing');
// 		// data needed
// 		console.log(arr[i].firstName);
// 		console.log(arr[i].lastName);
// 		console.log(arr[i].numbers.balls);
// 		console.log(arr[i].numbers.totalDrawn);
// 		if (arr[i].isPlaying) {
// 			// create td - name
// 			let name = document.createElement('td');
// 			let nameData = `${arr[i].firstName} ${arr[i].lastName}`;
// 			name.innerHTML = nameData;
// 			row.appendChild(name);
// 			// create td - numbers
// 			let numbers = arr[i].numbers.balls;
// 			for (let j = 0; j < numbers.length; j++) {
// 				let num = document.createElement('td');
// 				let numData = numbers[j].ball;
// 				let match = numbers[j].drawn;
// 				if (match) {
// 					num.classList.add('ball-matched');
// 					num.innerText = numData;
// 					row.appendChild(num);
// 				} else if (!match) {
// 					num.innerText = numData;
// 					row.appendChild(num);
// 				} else {
// 					console.log('error');
// 				}
// 			}
// 			let total = document.createElement('td');
// 			let value = arr[i].numbers.totalDrawn;
// 			total.innerText = value;
// 			row.appendChild(total);
// 			table.appendChild(row);
// 		}
// 	}
// }
