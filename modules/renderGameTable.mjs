import { numOfGameDraws } from './getGameDraws.mjs';

export function renderGameTable(playerArr) {
	console.log(playerArr);

	document.querySelector('#num-of-players').innerText = playerArr.length;
	document.querySelector('#prize-pot').innerText = `£${
		(playerArr.length - 1) * 0.5 * numOfGameDraws
	}`;

	document.querySelector('#player-fees').innerText = `Player fees for current game are £${(((playerArr.length - 1) * 0.5 * numOfGameDraws) / 8).toFixed(2)}`;
	// console.log(arr);
	// get dom elements
	const table = document.querySelector('#current-game-players-table');
	// create thead
	const thead = document.createElement('thead');
	// creates the thead row
	const row = document.createElement('tr');
	const html = `
	<th>Player Name</th><th colspan="10">Player Numbers</th><th>Total</th>
	`;
	row.innerHTML = html;
	thead.appendChild(row);
	table.appendChild(thead);
	// loop through each player
	// loop through each player playing
	const tbody = document.createElement('tbody');
	for (let i = 0; i < playerArr.length; i++) {
		// console.log(arr[i]);
		const row = document.createElement('tr');
		row.classList.add('player-playing');
		row.classList.add('highlight');
		// data needed
		// create td - name
		let name = document.createElement('td');
		let nameData = `${playerArr[i][0]} ${playerArr[i][1]}`;
		name.innerHTML = nameData;
		row.appendChild(name);
		// create td - numbers
		for (let j = 2; j < 12; j++) {
			let num = document.createElement('td');
			num.classList.add('ball');
			let numData = playerArr[i][j];
			if (numData < 10) {
				numData = `0${numData}`;
			} else {
				numData = playerArr[i][j];
			}
			num.innerText = numData;
			row.appendChild(num);
		}
		let total = document.createElement('td');
		let value = playerArr[i][12];
		total.innerText = value;
		row.appendChild(total);
		tbody.appendChild(row);
	}
	table.appendChild(tbody);
}
