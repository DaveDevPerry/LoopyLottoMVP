export function renderBallHistory(arr) {
	const ballHistContainer = document.querySelector('#ball-history-container');
	const eachBall = document.createElement('div');
	eachBall.classList.add('ball-history');
	const section = document.createElement('section');
	section.classList.add('ball-data-history');
	section.classList.add('container');
	eachBall.appendChild(section);
	const title = document.createElement('div');
	title.classList.add('section-title');
	const titleHTML = `
    <p>Balls</p>
    <div class="game-metric-icons">
      <div class="metric">
        <i class="fas fa-users"><span>9</span></i>
      </div>
      <div class="metric">
        <i class="fas fa-list-ol"><span id="all-balls">all balls</span></i>
      </div>
    </div>
    <div class="game-metric-icons">
      <div class="metric">
      <i class="fas fa-trophy"
          ><span id="game-winner">best ball</span></i
        >
      </div>
      
    </div>
    `;
	title.innerHTML = titleHTML;
	section.appendChild(title);
	// table
	const table = document.createElement('table');
	table.classList.add('ball-data-table');
	// thead
	const thead = document.createElement('thead');
	const tr = document.createElement('tr');
	const theadHTML = `
    <th>Ball</th>
    <th>Drawn</th>
    <th>Percentage</th>
    `;
	tr.innerHTML = theadHTML;
	thead.appendChild(tr);
	table.appendChild(thead);
	// tbody
	const tbody = document.createElement('tbody');
	arr.forEach((ball) => {
		// create tr
		const row = document.createElement('tr');
		row.classList.add('highlight');
		// ball num
		const ballNum = document.createElement('td');
		const bNData = ball.ball;
		if (bNData < 10) {
			ballNum.innerText = `0${bNData}`;
			row.appendChild(ballNum);
		} else if (bNData > 9) {
			ballNum.innerText = bNData;
			row.appendChild(ballNum);
		}
		// ball drawn
		const ballDrawn = document.createElement('td');
		const bDData = ball.drawn;
		if (bDData === 0) {
			ballDrawn.innerText = '-';
			row.appendChild(ballDrawn);
		} else {
			ballDrawn.innerText = bDData;
			row.appendChild(ballDrawn);
		}
		// ball drawn
		const ballPercentage = document.createElement('td');
		const bPData = ball.percentage;
		if (bPData === 0) {
			ballPercentage.innerText = '-';
			row.appendChild(ballPercentage);
		} else {
			ballPercentage.innerText = bPData;
			row.appendChild(ballPercentage);
		}

		tbody.appendChild(row);
	});
	table.appendChild(tbody);
	section.appendChild(table);
	const footer = document.createElement('div');
	footer.classList.add('section-footer');
	const footerHTML = 'not sure yet';
	footer.innerHTML = footerHTML;
	section.appendChild(footer);
	ballHistContainer.appendChild(eachBall);
}
