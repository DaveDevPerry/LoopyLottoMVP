import { getDate } from '../../modules/date.mjs';
import { countdownTimer } from '../../modules/countdownTimer.mjs';

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
