import { getDate } from './modules/date.mjs';
import { countdownTimer } from './modules/countdownTimer.mjs';
import { gameStartDates } from './modules/startDateInput.mjs';
import { getGameDraws } from './modules/getGameDraws.mjs';
import { renderGameDraws } from './modules/renderGameDraws.mjs';
import { getUniqueBalls } from './modules/getUniqueBalls.mjs';
import { generatePlayers } from './modules/generatePlayers.mjs';
import { sortByBallTotal } from './modules/sortByBallTotal.mjs';
import { renderGameTable } from './modules/renderGameTable.mjs';
import { renderBallsDrawn } from './modules/renderBallsDrawn.mjs';
import { renderBallsMatched } from './modules/renderBallsMatched.mjs';
import { getBallData } from './modules/getBallData.mjs';
import { renderGameHistoryTable } from './modules/getAllGamesData.mjs';
let userData,
	allPlaying,
	notPlaying = [];
export let drawData;
export let allBallsDrawn;
function loadDrawJSON(e, a, r) {
	var t = new XMLHttpRequest();
	(t.onreadystatechange = function () {
		t.readyState === XMLHttpRequest.DONE &&
			(200 === t.status ? a && a(JSON.parse(t.responseText)) : r && r(t));
	}),
		t.open('GET', e, !0),
		t.send();
}
renderGameHistoryTable(),
	(window.onload = function () {
		// document.querySelector('#intro').play();
	}),
	(document.querySelector('#date').innerText = getDate()),
	(document.querySelector('#game-number').innerText = gameStartDates.length),
	document.querySelector('#hamburger-unique').addEventListener('click', (e) => {
		e.target.parentElement.classList.toggle('grow-menu');
		new Audio('./audio/Large_Bubble-SoundBible.com.mp3').play(),
			document.querySelectorAll('.menu-links p').forEach((e) => {
				e.addEventListener('click', () => {
					new Audio('./audio/A-Tone-His_Self.mp3').play();
				});
			});
	}),
	countdownTimer();
let drawUrl = './JSON/draws.json',
	dData = function (e) {
		drawData = { data: e };
	},
	dError = function (e) {
		console.error(e);
	};
function loadUserJSON(e, a, r) {
	var t = new XMLHttpRequest();
	(t.onreadystatechange = function () {
		t.readyState === XMLHttpRequest.DONE &&
			(200 === t.status ? a && a(JSON.parse(t.responseText)) : r && r(t));
	}),
		t.open('GET', e, !0),
		t.send();
}
loadDrawJSON(drawUrl, dData, dError);
let userUrl = './JSON/users.JSON',
	jdata = function (e) {
		userData = { data: e };
	},
	jerror = function (e) {
		console.error(e);
	};
loadUserJSON(userUrl, jdata, jerror),
	setTimeout(() => {
		allBallsDrawn = getBallData(drawData);
		let e = getUniqueBalls(renderGameDraws(getGameDraws(drawData)));
		userData.data.user.forEach((a, r) => {
			let t = 0;
			!1 === a.isPlaying
				? notPlaying.push(a.firstName)
				: !0 === a.isPlaying
				? (a.numbers.balls.forEach((a) => {
						e.includes(a.ball) && ((a.drawn = !0), t++);
				  }),
				  (a.numbers.totalDrawn = t),
				  (a.sort = t),
				  (allPlaying = userData.data.user))
				: alert('error');
		}),
			renderGameTable(sortByBallTotal(generatePlayers(allPlaying))),
			renderBallsDrawn(e),
			renderBallsMatched(e);
	}, 1e3);
