export function renderBallsMatched(uniqueBalls) {
	let balls = document.querySelectorAll('.ball');

	// console.log(uniqueBalls);
	balls.forEach((ball) => {
		// console.log(ball);
		// console.log(parseInt(ball.innerText));
		if (uniqueBalls.includes(parseInt(ball.innerText))) {
			ball.classList.add('ball-matched');
		}
	});
}
