export function renderEachGame(arr) {
	console.log(arr);
	const gameHistContainer = document.querySelector('#game-history-container');
	if (arr.winner === undefined) {
		console.log('no games have finished');
		const noGames = document.createElement('div');
		const nGHTML = `
		<p>No Games Have Finished Yet</p>
		`;
		noGames.innerHTML = nGHTML;
		gameHistContainer.appendChild(noGames);
	} else {
		arr.forEach((game) => {
			const eachGame = document.createElement('div');
			eachGame.classList.add('all-draw-history');
			const section = document.createElement('section');
			section.classList.add('all-game-history');
			section.classList.add('container');
			eachGame.appendChild(section);
			const title = document.createElement('div');
			title.classList.add('section-title');
			const titleHTML = `
    <p>Game <span class="game-num">${game.game}</span></p>
    <div class="game-metric-icons">
      <div class="metric">
        <i class="fas fa-users"><span>9</span></i>
      </div>
      <div class="metric">
        <i class="fas fa-list-ol"><span id="all-draws">${
					game.draws.length
				}</span></i>
      </div>
    </div>
    <div class="game-metric-icons">
      <div class="metric">
      <i class="fas fa-trophy"
          ><span id="game-winner">${game.winner}</span></i
        >
      </div>
      <div class="metric">
        <i class="fas fa-wallet"><span>£${game.draws.length * 4}</span></i>
      </div>
    </div>
    `;
			title.innerHTML = titleHTML;
			section.appendChild(title);
			// table
			const table = document.createElement('table');
			table.classList.add('single-game-table');
			// thead
			const thead = document.createElement('thead');
			const tr = document.createElement('tr');
			const theadHTML = `
    <th>Draw Date</th><th colspan="6">Numbers Drawn</th><th>Bonus Ball</th>
    `;
			tr.innerHTML = theadHTML;
			thead.appendChild(tr);
			table.appendChild(thead);
			// tbody
			const tbody = document.createElement('tbody');
			// loop through each draw
			game.draws.forEach((draw) => {
				// create tr
				const row = document.createElement('tr');
				row.classList.add('highlight');
				// draw date
				const dD = document.createElement('td');
				const dDData = draw.date;
				dD.innerText = dDData;
				row.appendChild(dD);
				// numbers
				draw.numbers.forEach((num) => {
					const thisNum = num;
					// adding 0 if below 10
					if (thisNum < 10) {
						let td = document.createElement('td');
						td.innerText = `0${thisNum}`;
						row.appendChild(td);
					} else if (thisNum > 9) {
						let td = document.createElement('td');
						td.innerText = thisNum;
						row.appendChild(td);
					} else {
						console.error('rendering draw numbers');
					}
				});
				let bb = document.createElement('td');
				let bbNum = draw.bonusBall;
				bb.innerText = bbNum;
				row.appendChild(bb);
				tbody.appendChild(row);
			});
			table.appendChild(tbody);
			section.appendChild(table);

			const footer = document.createElement('div');
			footer.classList.add('section-footer');
			let endDate = game.draws.length - 1;
			const footerHTML = `${game.draws[0].date} - ${game.draws[endDate].date}`;
			footer.innerHTML = footerHTML;
			section.appendChild(footer);
			gameHistContainer.appendChild(eachGame);
		});
	}
}
