export function sortByBallTotal(playerArr) {
	// console.log(playerArr);
	playerArr.sort(function (a, b) {
		// console.log(a[12]);
		// console.log(b);
		return b[12] - a[12];
	});
	// console.log(playerArr);
	return playerArr;
}
