export const allBallsDrawn = [];

export function getBallData(drawData) {
	drawData.data.draw.forEach((draw) => {
		draw.numbers.forEach((num) => {
			allBallsDrawn.push(num);
		});
		allBallsDrawn.push(draw.bonusBall);
	});
	return allBallsDrawn;
}
