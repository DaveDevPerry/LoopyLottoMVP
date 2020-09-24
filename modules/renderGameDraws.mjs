export function renderGameDraws(arr) {
	// document.querySelector('#game-number').innerText = gameStartDates.length;
	console.log(arr);
	let reversed = arr.reverse();
	console.log(reversed);
	// reder metrics
	document.querySelector('#game-start-date').innerText =
		reversed[reversed.length - 1][0];
	document.querySelector('#game-last-updated').innerText = reversed[0][0];
	document.querySelector('#game-draws').innerText = arr.length;
	// render table
	const table = document.querySelector('#game-draw-history-table');
	const thead = document.createElement('tr');
	const html = `
<th>Draw Date</th><th colspan="6">Numbers Drawn</th><th>Bonus Ball</th>
`;
	thead.innerHTML = html;
	table.appendChild(thead);
	for (let i = 0; i < reversed.length; i++) {
		const row = document.createElement('tr');
		row.classList.add('game-draw');
		row.classList.add('highlight');
		for (let j = 0; j < reversed[i].length; j++) {
			let cell = document.createElement('td');
			let textNode;
			if (reversed[i][j] < 10 && reversed[i][j] > 0) {
				let num = '0';
				textNode = document.createTextNode(num + reversed[i][j]);
			} else {
				textNode = document.createTextNode(reversed[i][j]);
			}
			cell.appendChild(textNode);
			row.appendChild(cell);
			table.appendChild(row);
		}
	}
	return reversed;
}
