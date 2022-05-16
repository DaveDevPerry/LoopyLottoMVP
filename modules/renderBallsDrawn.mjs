export function renderBallsDrawn(arr) {
	document.querySelector('#unique-balls-drawn-count').innerText = arr.length;
	document.querySelector('#balls-not-drawn-count').innerText = 59 - arr.length;
}
