export function renderBallsMatched(uniqueBalls) {
	let balls = document.querySelectorAll('.ball');
	balls.forEach((ball) => {
		if (uniqueBalls.includes(parseInt(ball.innerText))) {
			ball.classList.add('ball-matched');
		}
	});
}
