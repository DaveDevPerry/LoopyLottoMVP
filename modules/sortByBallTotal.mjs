export function sortByBallTotal(playerArr) {
	playerArr.sort(function (a, b) {
		return b[12] - a[12];
	});
	return playerArr;
}
