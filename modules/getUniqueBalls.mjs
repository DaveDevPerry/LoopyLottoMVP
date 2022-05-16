export function getUniqueBalls(arr) {
	let allBalls = [];
	let uniqueBallsInGame = [];
	arr.forEach((draw) => {
		for (let i = 1; i < draw.length; i++) {
			allBalls.push(draw[i]);
		}
	});
	let unique = new Set(allBalls);
	uniqueBallsInGame = [...unique];
	return uniqueBallsInGame;
}

