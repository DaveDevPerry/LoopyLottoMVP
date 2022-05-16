export function renderAllDraws(arr) {
	let reversed = arr.reverse();
	document.querySelector('#all-draws').innerText = arr.length;
	// render table
	const table = document.querySelector('#all-draw-history-table');
	const thead = document.createElement('thead');
	const row = document.createElement('tr');
	const html = `
<th>Draw Date</th><th colspan="6">Numbers Drawn</th><th>Bonus Ball</th>
`;
	row.innerHTML = html;
	thead.appendChild(row);
	table.appendChild(thead);
	const tbody = document.createElement('tbody');
	for (let i = 0; i < reversed.length; i++) {
		const row = document.createElement('tr');
		row.classList.add('history-draw');
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
			tbody.appendChild(row);
		}
	}
	table.appendChild(tbody);
	return reversed;
}
