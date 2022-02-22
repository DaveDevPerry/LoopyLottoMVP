export const allBallsDrawn = [];

export function getBallData(drawData) {
	// console.log(drawData);
	drawData.data.draw.forEach((draw) => {
		// console.log(draw);
		// console.log(draw.numbers);
		draw.numbers.forEach((num) => {
			allBallsDrawn.push(num);
		});
		allBallsDrawn.push(draw.bonusBall);
	});
	return allBallsDrawn;
}
