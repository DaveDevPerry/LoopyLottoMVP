import { getDate } from '../../modules/date.mjs';
import { countdownTimer } from '../../modules/countdownTimer.mjs';
import { getAllDraws } from '../../modules/getAllDraws.mjs';
import { renderAllDraws } from '../../modules/renderAllDraws.mjs';
import { getUniqueBalls } from '../../modules/getUniqueBalls.mjs';
import { sortByBallTotal } from '../../modules/sortByBallTotal.mjs';
import { renderBallsDrawn } from '../../modules/renderBallsDrawn.mjs';
import { renderBallsMatched } from '../../modules/renderBallsMatched.mjs';

// global

// player
let userData;
let allPlaying;
let notPlaying = [];
// let playerArr = [];
// draw
let drawData;
// let allDrawsInGame = [];
// let uniqueBalls;
// let uniqueBallsInGame = [];

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

// dom elements

// arrays

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

/// userData ************************************************************
// function loadUserJSON(path, success, error) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === XMLHttpRequest.DONE) {
// 			if (xhr.status === 200) {
// 				if (success) success(JSON.parse(xhr.responseText));
// 			} else {
// 				if (error) error(xhr);
// 			}
// 		}
// 	};
// 	xhr.open('GET', path, true);
// 	xhr.send();
// }
// let userUrl = '../JSON/users.JSON';
// let jdata = function (data) {
// 	// console.log(data);
// 	// console.log(typeof data);
// 	userData = { data };
// };
// let jerror = function (xhr) {
// 	console.error(xhr);
// };
// loadUserJSON(userUrl, jdata, jerror);

// START **************************************************************************
// below is the userdata testing
setTimeout(() => {
	// let uniqueBalls = getUniqueBalls(renderGameDraws(getGameDraws(drawData)));
	// console.log(uniqueBalls);
	console.log(drawData);

	let uniqueBalls = getUniqueBalls(renderAllDraws(getAllDraws(drawData)));

	// get all current game draws
	// let gameDraws = drawHistory;
	// console.log(gameDraws);
	// get all unique numbers
	// let uniqueBalls = getUniqueNumbers();
	// console.log(uniqueBalls);
	// foreach user do the following - forEach

	// *********************************************************

	// renderBallsDrawn(uniqueBalls);
	// renderBallsMatched(uniqueBalls);

	// console.log(userData);
}, 1000);
