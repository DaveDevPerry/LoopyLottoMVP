export function generatePlayers(arr) {
	console.log(arr);
	let playerArr = [];
	arr.forEach((user) => {
		let arr = [];
		if (user.isPlaying) {
			arr.push(user.firstName);
			arr.push(user.lastName);
			user.numbers.balls.forEach((ball) => {
				arr.push(ball.ball);
			});
			arr.push(user.numbers.totalDrawn);
			playerArr.push(arr);
		} else {
			console.log('not playing');
		}
	});
	console.log(playerArr);
	return playerArr;
}
