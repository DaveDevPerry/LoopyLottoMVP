// export function countdownTimer() {
// 	const satDrawTimer = new Date('sept 02, 2020 19:45:00').getTime();
// 	const x = setInterval(function () {
// 		const now = new Date().getTime();
// 		const t = satDrawTimer - now;
// 		const days = Math.floor(t / (1000 * 60 * 60 * 24));
// 		const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 		const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// 		const seconds = Math.floor((t % (1000 * 60)) / 1000);

// 		document.querySelector('.countdown').innerHTML = `
// 		<div class="time-ball">${days}<p>days</p></div>:
// 		<div class="time-ball">${hours}<p>hours</p></div>:
// 		<div class="time-ball">${minutes}<p>mins</p></div>:
// 		<div class="time-ball">${seconds}<p>secs</p></div>`;

// 		if (t < 0) {
// 			clearInterval(x);
// 			const message = document.querySelector('.countdown');
// 			message.innerHTML = 'Draw In Progress';
// 			message.classList.add('red'); 
// 		}    need to add login
// 	}, 1000);
// }

// need to write automatic  function to save changing this every week

export function countdownTimer() {
	// const nextDraw = returnNextDraw();
	const nextDraw = 'Apr 16, 2022 19:45:00';
	// const nextDraw = 'Apr 02, 2022 20:00:00';/
	// last datE 
	// console.log(nextDraw);

	// sat 19:45 wed 20:00
	const satDrawTimer = new Date(`${nextDraw}`).getTime();
	// console.log(satDrawTimer);
	// const satDrawTimer = new Date('June 16, 2021 20:00:00').getTime();
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
	// const wedDraw = 
	// get last updated draw
	const lastDraw = document.querySelector('#game-last-updated').innerText;
	// console.log(lastDraw);
	// current date details
	const now = new Date().getTime();
	const today = new Date().toLocaleDateString();

	// console.log(today);
	const day = new Date().getDay();
	// console.log(day);
	let nextDraw;

	// if(day === 0 || day === 1 || day === 2){
	// 	nextDraw = nextWedDraw();
	// }
	// if(day === 4 || day === 5){
	// 	nextDraw = nextSatDraw();
	// }

	const nextWed = new Date(nextWedDraw()).getTime();
	// console.log(nextWed);
	const nextSat = new Date(nextSatDraw()).getTime();
	const currentDate = new Date().getTime();
	// console.log(currentDate, nextWed, nextSat);

	// const msToWed = nextWed - currentDate;
	// const msToSat = nextSat - currentDate;
	const msToWed = currentDate % nextWed;
	const msToSat = currentDate % nextSat;
	// console.log(msToWed, msToSat);

	if (msToWed < msToSat) {
		nextDraw = nextSatDraw();
	}
	if (msToWed > msToSat) {
		nextDraw = nextWedDraw();
	}

	const nextDrawMs = new Date(nextDraw).getTime();
	// console.log(nextDrawMs);


	return nextDraw;
	// const date = new Date().getTime();
}

function nextWedDraw() {
	const drawTime = "20:00:00";

	let d = new Date();
	d.setDate(d.getDate() + (3 + 7 - d.getDay()) % 7);
	// console.log(d);

	const month = months[d.getMonth()];
	// console.log(month);
	const day = d.getDate();
	// console.log(day);
	const year = d.getFullYear();
	// console.log(year);

	const nextDraw = `${month} ${day}, ${year} ${drawTime}`;
	// console.log(nextDraw);
	return nextDraw;
}


function nextSatDraw() {
	const drawTime = "19:45:00";

	let d = new Date();
	d.setDate(d.getDate() + (6 + 7 - d.getDay()) % 7);
	// console.log(d);

	const month = months[d.getMonth()];
	// console.log(month);
	const day = d.getDate();
	// console.log(day);
	const year = d.getFullYear();
	// console.log(year);

	const nextDraw = `${month} ${day}, ${year} ${drawTime}`;
	// console.log(nextDraw);
	return nextDraw;
}