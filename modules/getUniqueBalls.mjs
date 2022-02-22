export function getUniqueBalls(arr) {
	// console.log(arr);
	let allBalls = [];
	let uniqueBallsInGame = [];
	arr.forEach((draw) => {
		for (let i = 1; i < draw.length; i++) {
			allBalls.push(draw[i]);
		}
	});
	// console.log(allBalls);
	// [...new Set(allBalls)];
	// console.log(allBalls);
	let unique = new Set(allBalls);
	uniqueBallsInGame = [...unique];
	// console.log(uniqueBallsInGame);
	return uniqueBallsInGame;
}

// export let uniqueBalls = getUniqueBalls()
