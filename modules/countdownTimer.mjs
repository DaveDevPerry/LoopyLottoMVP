export function countdownTimer() {
	// const nextDraw = 'May 14, 2022 19:45:00';
	const nextDraw = 'May 18, 2022 20:00:00';


	// sat 19:45 wed 20:00
	const satDrawTimer = new Date(`${nextDraw}`).getTime();
	const x = setInterval(function () {
		const now = new Date().getTime();
		const t = satDrawTimer - now;
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((t % (1000 * 60)) / 1000);
		document.querySelector('.countdown').innerHTML = `
		<div class="time-ball">${days}<p>days</p></div>:
		<div class="time-ball">${hours}<p>hours</p></div>:
		<div class="time-ball">${minutes}<p>mins</p></div>:
		<div class="time-ball">${seconds}<p>secs</p></div>`;
		if (t < 0) {
			clearInterval(x);
			const message = document.querySelector('.countdown');
			message.innerHTML = 'Draw In Progress';
			message.classList.add('red');
		}
	}, 1000);
}
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
function returnNextDraw() {
	// both draw details
	// get last updated draw
	const lastDraw = document.querySelector('#game-last-updated').innerText;
	// current date details
	const now = new Date().getTime();
	const today = new Date().toLocaleDateString();

	const day = new Date().getDay();
	// console.log(day);
	let nextDraw;


	const nextWed = new Date(nextWedDraw()).getTime();
	// console.log(nextWed);
	const nextSat = new Date(nextSatDraw()).getTime();
	const currentDate = new Date().getTime();
	const msToWed = currentDate % nextWed;
	const msToSat = currentDate % nextSat;
	if (msToWed < msToSat) {
		nextDraw = nextSatDraw();
	}
	if (msToWed > msToSat) {
		nextDraw = nextWedDraw();
	}
	const nextDrawMs = new Date(nextDraw).getTime();
	return nextDraw;
}

function nextWedDraw() {
	const drawTime = "20:00:00";
	let d = new Date();
	d.setDate(d.getDate() + (3 + 7 - d.getDay()) % 7);
	const month = months[d.getMonth()];
	const day = d.getDate();
	const year = d.getFullYear();
	const nextDraw = `${month} ${day}, ${year} ${drawTime}`;
	return nextDraw;
}

function nextSatDraw() {
	const drawTime = "19:45:00";
	let d = new Date();
	d.setDate(d.getDate() + (6 + 7 - d.getDay()) % 7);
	const month = months[d.getMonth()];
	const day = d.getDate();
	const year = d.getFullYear();
	const nextDraw = `${month} ${day}, ${year} ${drawTime}`;
	return nextDraw;
}