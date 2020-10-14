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
// 		}
// 	}, 1000);
// }

export function countdownTimer() {
	const satDrawTimer = new Date('Oct 17, 2020 20:00:00').getTime();
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
