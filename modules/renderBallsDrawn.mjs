export function renderBallsDrawn(arr) {
	// console.log(arr);
	document.querySelector('#unique-balls-drawn-count').innerText = arr.length;
	document.querySelector('#balls-not-drawn-count').innerText = 59 - arr.length;
}
