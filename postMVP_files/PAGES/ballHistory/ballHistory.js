import { getDate } from '../../modules/date.mjs';
import { countdownTimer } from '../../modules/countdownTimer.mjs';
// import { drawData } from '../../app.js';
import { getBallData } from '../../modules/getBallData.mjs';
import { allBallsDrawn } from '../../modules/getBallData.mjs';
import { renderBallHistory } from '../../modules/renderBallHistory.mjs';

// import { getAllDraws } from '../../modules/getAllDraws.mjs';
// import { renderAllDraws } from '../../modules/renderAllDraws.mjs';
// import { getUniqueBalls } from '../../modules/getUniqueBalls.mjs';
// import { sortByBallTotal } from '../../modules/sortByBallTotal.mjs';
// import { renderBallsDrawn } from '../../modules/renderBallsDrawn.mjs';
// import { renderBallsMatched } from '../../modules/renderBallsMatched.mjs';
// import { getEachGame } from '../../modules/getEachGame.mjs';
// import { renderEachGame } from '../../modules/renderEachGame.mjs';

// global

let ballData;
let drawData;

// EVENTS
document.querySelector('#date').innerText = getDate();
// document.querySelector('#game-number').innerText = gameStartDates.length;
document.querySelector('#hamburger-unique').addEventListener('click', (e) => {
	console.log(e);
	console.log(e.target.parentElement);
	e.target.parentElement.classList.toggle('grow-menu');
	const audio = new Audio('../../audio/Large_Bubble-SoundBible.com.mp3');
	audio.play();
	document.querySelectorAll('.menu-links p').forEach((link) => {
		link.addEventListener('click', () => {
			const audio = new Audio('../../audio/A-Tone-His_Self.mp3');
			audio.play();
		});
	});
});
// order of play
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
let drawUrl = '../../JSON/draws.json';
let dData = function (data) {
	// console.log(data);
	// console.log(typeof data);
	drawData = { data };
};
let dError = function (xhr) {
	console.error(xhr);
};
loadDrawJSON(drawUrl, dData, dError);

function loadBallsJSON(path, success, error) {
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
let ballUrl = '../../JSON/balls.json';
let bData = function (data) {
	ballData = { data };
};
let bError = function (xhr) {
	console.error(xhr);
};
loadBallsJSON(ballUrl, bData, bError);
// START **************************************************************************
// below is the userdata testing
setTimeout(() => {
	console.log(ballData);
	let allBallsDrawn = getBallData(drawData);
	console.log(allBallsDrawn);

	// console.log(newBallData);
	// function to update ballData abject from
	//foreach ball - count how many times it is in allBallsDrawn
	ballData.data.balls.forEach((ball) => {
		console.log(ball);
		let num = ball.ball;
		let numTimes = getOccurrence(allBallsDrawn, num);
		console.log(numTimes);
		ball.drawn = numTimes;

		let percent = getPercentage(allBallsDrawn, numTimes);
		console.log(percent.toFixed(2));
		ball.percentage = parseFloat(percent.toFixed(2));
	});
	console.log(ballData);
	console.log(ballData.data.balls);
	// let sortedBestArr = sortBallsByBest(ballData.data.balls);
	let ballsToRender = ballData.data.balls;
	let bTR = renderBallHistory(ballsToRender);
	// let sortedWorstArr = sortBallsByWorst(ballData.data.balls);
	// console.log(sortedBestArr);
	// console.log(sortedWorstArr);
}, 1000);

// mini functions
// get player count for certain date/game
function getOccurrence(array, value) {
	return array.filter((v) => v === value).length;
}

function getPercentage(array, value) {
	console.log(array.length);
	let ballCount = array.length;
	console.log(ballCount);
	let percent = (value / ballCount) * 100;

	return percent;
}
// function sortBallsByBest(arr) {
// 	console.log(arr);
// 	const bestArr = arr;
// 	bestArr.sort((a, b) => {
// 		console.log(a);
// 		console.log(a.drawn);
// 		console.log(b.drawn);
// 		return b.drawn - a.drawn;
// 		console.log(arr);
// 	});
// 	console.log(arr);
// 	return bestArr;
// }
// function sortBallsByWorst(arr) {
// 	arr.sort((a, b) => {
// 		return a.drawn - b.drawn;
// 	});
// 	return arr;
// }
