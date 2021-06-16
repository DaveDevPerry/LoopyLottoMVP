import { getDate } from '../../modules/date.mjs';
import { countdownTimer } from '../../modules/countdownTimer.mjs';

import { getAllDraws } from '../../modules/getAllDraws.mjs';
import { renderAllDraws } from '../../modules/renderAllDraws.mjs';
import { getUniqueBalls } from '../../modules/getUniqueBalls.mjs';
import { sortByBallTotal } from '../../modules/sortByBallTotal.mjs';
import { renderBallsDrawn } from '../../modules/renderBallsDrawn.mjs';
import { renderBallsMatched } from '../../modules/renderBallsMatched.mjs';
import { getEachGame } from '../../modules/getEachGame.mjs';
import { renderEachGame } from '../../modules/renderEachGame.mjs';

// global

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
	drawData = { data };
};
let dError = function (xhr) {
	console.error(xhr);
};
loadDrawJSON(drawUrl, dData, dError);
// START **************************************************************************
// below is the userdata testing
setTimeout(() => {
	console.log(drawData);

	// let uniqueBalls = getUniqueBalls(renderAllDraws(getAllDraws(drawData)));

	renderEachGame(getEachGame(drawData));
	// get all draw analytics - numbers of total draws
	// get ball all draw totals - total balls, total unique,
	// grab each starting date from array - gameStartDates.forEach
	// get index of the start dates
	// find next instance of winner = true in drawData
	// map this Game data to array
	// get thisGame stats
	// grab container dom element

	// render thisGame html
}, 1000);

// mini functions
// get player count for certain date/game
