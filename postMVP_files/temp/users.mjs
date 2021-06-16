// // FUNTION containing all neccessary Functions to run on load
// function loopyLottoInit() {
// 	runDrawMethods();
// 	runPersonMethods();
// 	checkPlayerNumbers();
// 	buildDrawTable();
// 	buildPlayerTable();
// 	ballTest();
// 	displayBalls();
// 	sortByName();
// 	sortByBallTotal();
// 	goGreen();
// 	runCounters();
// 	displayLastUpdate();
// 	runHistoryMethods();
// 	buildWinnersTable();
// 	gameDrawDates();
// 	displayTotal();
// 	showTotalWon();
// 	isWinner();
// }

// // ******** API Link with csv file **********************************************************
// //https://www.national-lottery.co.uk/results/lotto/draw-history/csv

// // ******** LOTTERY CONSTANTS ***************************************************************
// const lottoNumberRange = [
// 	00,
// 	01,
// 	02,
// 	03,
// 	04,
// 	05,
// 	06,
// 	07,
// 	08,
// 	09,
// 	10,
// 	11,
// 	12,
// 	13,
// 	14,
// 	15,
// 	16,
// 	17,
// 	18,
// 	19,
// 	20,
// 	21,
// 	22,
// 	23,
// 	24,
// 	25,
// 	26,
// 	27,
// 	28,
// 	29,
// 	30,
// 	31,
// 	32,
// 	33,
// 	34,
// 	35,
// 	36,
// 	37,
// 	38,
// 	39,
// 	40,
// 	41,
// 	42,
// 	43,
// 	44,
// 	45,
// 	46,
// 	47,
// 	48,
// 	49,
// 	50,
// 	51,
// 	52,
// 	53,
// 	54,
// 	55,
// 	56,
// 	57,
// 	58,
// 	59,
// ];
// const feePerDraw = 1;

// // ******** COUNTERS ************************************************************************
// let playingCounter = 0;
// let notPlayingCounter = 0;
// let allNumbersDrawnCounter = 0;
// let uniqueNumbersCounter = 0;
// let drawHistoryCounter = 0;
// let kitty = 0;
// let startDate = document.querySelector('.start-date-data');
// let winnersCounter = 0;
// let totalPrizeMoney = 0;

// // ********** PLAYER DETAILS *****************************************************************
// // PLAYER INPUT = Manually add player here until incorporate a database
// const person1 = new Person('Dave', 1, 4, 7, 13, 16, 22, 26, 32, 42, 51, true);
// const person2 = new Person('Martin', 1, 4, 8, 9, 11, 12, 17, 35, 54, 58, true);
// const person3 = new Person(
// 	'Brenda',
// 	3,
// 	5,
// 	11,
// 	15,
// 	22,
// 	26,
// 	28,
// 	43,
// 	48,
// 	51,
// 	true
// );
// const person4 = new Person('Mike', 7, 9, 13, 21, 26, 32, 38, 40, 43, 47, true);
// const person5 = new Person(
// 	'Jackie',
// 	3,
// 	7,
// 	12,
// 	23,
// 	28,
// 	36,
// 	42,
// 	46,
// 	51,
// 	59,
// 	true
// );
// const person6 = new Person('Rob', 2, 3, 4, 11, 12, 17, 21, 28, 44, 58, true);
// const person7 = new Person(
// 	'Hannah',
// 	2,
// 	7,
// 	12,
// 	15,
// 	16,
// 	19,
// 	21,
// 	28,
// 	35,
// 	42,
// 	true
// );
// const person8 = new Person('Doug', 3, 5, 7, 9, 12, 13, 24, 38, 49, 51, true);
// const person9 = new Person('John', 1, 3, 8, 10, 15, 26, 32, 45, 48, 50, true);
// const person10 = new Person(
// 	'Justin Walker',
// 	2,
// 	6,
// 	8,
// 	11,
// 	20,
// 	35,
// 	44,
// 	49,
// 	50,
// 	58,
// 	false
// );

// // PlAYER ARRAYS
// let allPeopleArray = [];
// let testArray = [];
// let allPeoplePlaying = [];
// let allPeopleNotPlaying = [];
// let personMethods = [
// 	person1,
// 	person2,
// 	person3,
// 	person4,
// 	person5,
// 	person6,
// 	person7,
// 	person8,
// 	person9,
// 	person10,
// ];
// // ,person22,person23,person24,person25,person26,person27,person28,person29,person30

// // OBJECT CONSTRUCTOR  -  creates an object blue print for each player to save a lot of code
// function Person(
// 	name,
// 	no1,
// 	no2,
// 	no3,
// 	no4,
// 	no5,
// 	no6,
// 	no7,
// 	no8,
// 	no9,
// 	no10,
// 	isPlaying
// ) {
// 	this.name = name;
// 	this.no1 = no1;
// 	this.no2 = no2;
// 	this.no3 = no3;
// 	this.no4 = no4;
// 	this.no5 = no5;
// 	this.no6 = no6;
// 	this.no7 = no7;
// 	this.no8 = no8;
// 	this.no9 = no9;
// 	this.no10 = no10;
// 	this.isPlaying = isPlaying;
// 	this.totalMatched;
// 	this.playerNumbersOnlyArray = [];
// 	this.addToAllPlayers = function () {
// 		allPeopleArray.push([
// 			this.name,
// 			this.no1,
// 			this.no2,
// 			this.no3,
// 			this.no4,
// 			this.no5,
// 			this.no6,
// 			this.no7,
// 			this.no8,
// 			this.no9,
// 			this.no10,
// 			this.isPlaying,
// 		]);
// 	};
// 	this.sortPeoplePlaying = function () {
// 		if (this.isPlaying) {
// 			allPeoplePlaying.push([
// 				this.name,
// 				this.no1,
// 				this.no2,
// 				this.no3,
// 				this.no4,
// 				this.no5,
// 				this.no6,
// 				this.no7,
// 				this.no8,
// 				this.no9,
// 				this.no10,
// 				this.isPlaying,
// 			]);
// 			playingCounter++;
// 			console.log(allPeoplePlaying);
// 			this.playerNumbersOnlyArray.push(
// 				this.no1,
// 				this.no2,
// 				this.no3,
// 				this.no4,
// 				this.no5,
// 				this.no6,
// 				this.no7,
// 				this.no8,
// 				this.no9,
// 				this.no10
// 			);
// 		} else if (this.isPlaying === false) {
// 			allPeopleNotPlaying.push([
// 				this.name,
// 				this.no1,
// 				this.no2,
// 				this.no3,
// 				this.no4,
// 				this.no5,
// 				this.no6,
// 				this.no7,
// 				this.no8,
// 				this.no9,
// 				this.no10,
// 				this.isPlaying,
// 			]);
// 			notPlayingCounter++;
// 		} else {
// 			alert(`something has gone wrong in sortPeoplePlaying method`);
// 		}
// 	};
// 	this.updateNumbers = function () {
// 		// checks to see if players numbers match and in uniquenumber array
// 		console.log('update numbers function');
// 		console.log(this);
// 		// get all numbers for this player and store in new this.array
// 		this.playerNumbersOnlyArray.push(
// 			this.no1,
// 			this.no2,
// 			this.no3,
// 			this.no4,
// 			this.no5,
// 			this.no6,
// 			this.no7,
// 			this.no8,
// 			this.no9,
// 			this.no10
// 		);
// 		// console.log(this.playerNumbersOnlyArray);
// 	};
// }
// // function - run person methods
// function runPersonMethods() {
// 	for (let i = 0; i < personMethods.length; i++) {
// 		if (personMethods[i]) {
// 			personMethods[i].updateNumbers();
// 			personMethods[i].addToAllPlayers();
// 			personMethods[i].sortPeoplePlaying();
// 		} else {
// 			alert(`error running personMethods function`);
// 		}
// 	}
// }
// // allPeoplePlaying = allPeoplePlaying.sort(function(a, b) {
// //   return a[1].localeCompare(b[1]);
// // *************************** DRAW DETAILS *************************************************************
// // DRAW INPUT

// const draw1 = new NewDrawNumbers('08/08/2020', 0, 0, 0, 0, 0, 0, 0);
// // const draw2 = new NewDrawNumbers('14/03/2020', 7, 22, 30, 38, 42, 47, 14);
// // const draw3 = new NewDrawNumbers('18/03/2020', 3, 7, 11, 19, 27, 52, 5);
// // const draw4 = new NewDrawNumbers('21/03/2020', 12, 26, 29, 34, 56, 58, 41);
// // const draw5 = new NewDrawNumbers('25/03/2020', 11, 24, 25, 39, 53, 57, 9);
// // const draw6 = new NewDrawNumbers('28/03/2020', 8, 14, 27, 33, 46, 49, 11);
// // const draw7 = new NewDrawNumbers('01/04/2020', 4, 16, 17, 22, 27, 52, 30);
// // const draw8 = new NewDrawNumbers('04/04/2020', 4, 22, 28, 39, 45, 49, 25);
// // const draw9 = new NewDrawNumbers('08/04/2020', 1, 4, 19, 20, 41, 45, 7);
// // const draw10 = new NewDrawNumbers('11/04/2020', 20, 28, 30, 31, 44, 55, 50);
// // const draw11 = new NewDrawNumbers('15/04/2020', 25, 37, 38, 43, 54, 57, 17);

// // const draw12 = new NewDrawNumbers('09/11/2019',2,11,16,46,51,58,31);

// // DRAW ARRAYS
// let drawHistory = [];
// let allNumbers = [];
// let drawMethods = [
// 	draw1,
// 	// draw2,
// 	// draw3,
// 	// draw4,
// 	// draw5,
// 	// draw6,
// 	// draw7,
// 	// draw8,
// 	// draw9,
// 	// draw10,
// ];
// // ,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9,draw10,draw11,draw12];
// let allNumbersDrawnArray = [];
// let uniqueNumbersDrawnArray = [];
// let drawNumbers;

// // OBJECT CONSTRUCTOR - to input each draw based  on a template
// function NewDrawNumbers(
// 	drawDate,
// 	ball1,
// 	ball2,
// 	ball3,
// 	ball4,
// 	ball5,
// 	ball6,
// 	bb
// ) {
// 	this.drawDate = drawDate;
// 	this.ball1 = ball1;
// 	this.ball2 = ball2;
// 	this.ball3 = ball3;
// 	this.ball4 = ball4;
// 	this.ball5 = ball5;
// 	this.ball6 = ball6;
// 	this.bb = bb;
// 	this.addDrawToHistory = function () {
// 		// add this draw to draw history
// 		drawHistory.push([
// 			this.drawDate,
// 			this.ball1,
// 			this.ball2,
// 			this.ball3,
// 			this.ball4,
// 			this.ball5,
// 			this.ball6,
// 			this.bb,
// 		]);
// 		drawHistoryCounter++;
// 		// console.log(drawHistory);
// 	};
// 	this.addNumbersToAllNumbers = function () {
// 		// add numbers from this draw to all numbers array
// 		allNumbersDrawnArray.push(
// 			this.ball1,
// 			this.ball2,
// 			this.ball3,
// 			this.ball4,
// 			this.ball5,
// 			this.ball6,
// 			this.bb
// 		);
// 		// console.log(allNumbersDrawnArray);
// 	};
// }

// // OBJECT CONSTRUCTOR FOR WINNERS
// // let winnersArray = [];

// // function LottoWinner(name, amount) {
// //   this.name = name;
// //   this.amount = amount;
// //   this.addToWinnersArray = function () {
// //     winnersArray.push([this.name, this.amount]);
// //     winnersCounter++;
// //   };
// // }
// // let winnerTableHTML = '';
// // const winner1 = new LottoWinner('Oz Sengul', 108);
// // const winner2 = new LottoWinner('Keith Godfrey', 390);
// // const winner3 = new LottoWinner('Sarah Jacobs', 351);
// // const winner4 = new LottoWinner('Shelly Saunders', 168);
// // const winner5 = new LottoWinner('John Weir', 253);
// // const winner6 = new LottoWinner('Ashley Charles', 304);
// // const winner7 = new LottoWinner('Dave Rustom', 180);
// // const winner8 = new LottoWinner('Ashley Charles', 120);
// // const winner9 = new LottoWinner('Cassy Smith', 231);
// // const winner10 = new LottoWinner('Justin Walker', 153);
// // const winner11 = new LottoWinner('Dave Rustom', 153);
// // const winner12 = new LottoWinner('John Weir', 221);
// // const winner13 = new LottoWinner('Justin Walker', 221);
// // const winner14 = new LottoWinner('Justin Wells', 238);
// // const winner15 = new LottoWinner('Dan Woodard', 216);
// // const winner16 = new LottoWinner('Antonio Da Silva', 221);
// // const winner17 = new LottoWinner('Justin Walker', 136);

// // let winnersMethods = [
// //   winner1,
// //   winner2,
// //   winner3,
// //   winner4,
// //   winner5,
// //   winner6,
// //   winner7,
// //   winner8,
// //   winner9,
// //   winner10,
// //   winner11,
// //   winner12,
// //   winner13,
// //   winner14,
// //   winner15,
// //   winner16,
// //   winner17,
// // ];

// // function runHistoryMethods() {
// //   for (let i = 0; i < winnersMethods.length; i++) {
// //     if (winnersMethods[i]) {
// //       winnersMethods[i].addToWinnersArray();
// //     } else {
// //       alert(`error running winnersMethods function`);
// //     }
// //   }
// // }

// // ****** function build winners html table
// let winnersTableHTML = '';
// function buildWinnersTable() {
// 	winnersArray.reverse();
// 	winnersArray.forEach(popWinnersTable);
// 	// get total won
// }

// function displayTotal() {
// 	winnersArray.forEach(getTotalWon);
// }
// let totalWinningHTML = 0;
// function getTotalWon(item, index) {
// 	console.log(item);
// 	console.log(item[0]);
// 	console.log(item[1]);
// 	totalWinningHTML += item[1];
// 	console.log(totalWinningHTML);
// }
// function showTotalWon() {
// 	console.log(totalWinningHTML);
// 	const showTotal = document.getElementById('total-won');
// 	showTotal.innerHTML = `Total Won is £${totalWinningHTML}`;
// }
// function popWinnersTable(item) {
// 	const winnerTableBody = document.getElementById('winners-data');
// 	winnerTableHTML += `<tr>
//                       <td class="winner-name">${item[0]}</td>
//                       <td class="winner-prize" id="${item[1]}">£${item[1]}</td>
//                       </tr>`;
// 	winnerTableBody.innerHTML = winnerTableHTML;
// }

// // ************* ALL FUNCTIONS ***********************************
// //function - run draw methods
// function runDrawMethods() {
// 	// runs the methods in the object constructor
// 	for (let i = 0; i < drawMethods.length; i++) {
// 		if (drawMethods[i]) {
// 			drawMethods[i].addDrawToHistory();
// 			drawMethods[i].addNumbersToAllNumbers();
// 		}
// 		allNumbersDrawnCounter = allNumbersDrawnArray.length;
// 		getUniqueNumbers();
// 	}
// }

// // add unique numbers from allnumbers array to a new array of unique numbers
// function getUniqueNumbers() {
// 	uniqueNumbersDrawnArray = [...new Set(allNumbersDrawnArray)];
// 	// console.log(uniqueNumbersDrawnArray);
// 	uniqueNumbersCounter = uniqueNumbersDrawnArray.length;
// }

// function runCounters() {
// 	getCounters();
// 	populateCounters();
// }
// // FUNCTION to populate all the stats for the round
// function getCounters() {
// 	allNumbersDrawnCounter = allNumbersDrawnArray.length;
// 	// console.log(`all balls drawn count = ${allNumbersDrawnCounter}`);
// 	uniqueNumbersCounter = uniqueNumbersDrawnArray.length;
// 	// console.log(`unique numbers drawn = ${uniqueNumbersCounter}`);
// 	drawHistoryCounter = drawHistory.length;
// 	// console.log(`total draws = ${drawHistoryCounter}`);
// 	playingCounter = allPeoplePlaying.length;
// 	// console.log(`total players = ${playingCounter}`);
// 	kitty = `£${drawHistoryCounter * playingCounter - drawHistoryCounter}`;
// 	// console.log(`£${kitty}`);
// 	console.log(drawHistory[0][0]);
// 	// startDate.innerHTML = (drawHistory[0][0]);
// }
// function populateCounters() {
// 	document.getElementById('kitty-data').innerHTML = kitty;
// 	document.getElementById('participants-data').innerText = playingCounter;
// 	document.getElementById(
// 		'numbers-drawn-data'
// 	).innerHTML = `${uniqueNumbersCounter} / 59`;
// 	document.getElementById(
// 		'number-of-draws-data'
// 	).innerHTML = drawHistoryCounter;
// 	document.getElementById(
// 		'balls-drawn-data'
// 	).innerHTML = allNumbersDrawnCounter;
// 	document.getElementById('start-date-data').innerText = drawHistory[0][0];
// }

// // match player numbers , return count and push to array
// function checkPlayerNumbers() {
// 	console.log(allPeoplePlaying);
// 	console.log(uniqueNumbersDrawnArray);
// 	for (let i = 0; i < allPeoplePlaying.length; i++) {
// 		console.log(allPeoplePlaying[i]);
// 		let matchArray = allPeoplePlaying[i].filter((element) =>
// 			uniqueNumbersDrawnArray.includes(element)
// 		);
// 		console.log(matchArray);
// 		// console.log(this.matchArray.length);
// 		let totalMatched = matchArray.length;
// 		console.log(totalMatched);
// 		// (allPeoplePlaying[i]).push(totalMatched);
// 		allPeoplePlaying[i][11] = totalMatched;
// 		// console.log(allPeoplePlaying);
// 	}
// 	console.log(allPeoplePlaying);
// }

// function gameDrawDates() {
// 	let startDate = drawHistory[0][0];
// 	let x = drawHistory.length - 1;
// 	console.log('x is ' + x);
// 	let latestDrawDate = drawHistory[x][0];
// 	let dateRange = document.querySelector('#game-draw-dates');
// 	dateRange.innerHTML = `${startDate} - ${latestDrawDate}`;
// }

// // *******************working***********************************
// // const playerTable = document.getElementById('main-table');

// // function createPlayerTable() {
// //   for(let i = 1; i < playerTable.rows.length; i++) {
// //     for(let j = 0; j < playerTable.rows[i].cells.length; j++) {
// //       playerTable.rows[i].cells[j].innerHTML = allPeoplePlaying[i-1][j];
// //     }
// //   }
// // };
// // *********************above working ****************************

// // display balls for each ball index in allnumbersdrawn change class to green
// const numbersDrawnTable = document.getElementById('numbers-drawn-table');

// function togglePlayerNumbersDrawn() {
// 	console.log(allPeoplePlaying);
// 	for (let i = 0; i < allPeoplePlaying.length; i++) {
// 		for (let j = 1; j < allPeoplePlaying[i].length - 1; j++) {
// 			console.log(allPeoplePlaying[i][j]);
// 			let x = allPeoplePlaying[i][j].toString();
// 			console.log(x);
// 		}
// 	}
// }
// let lastUpdate = document.getElementById('last-update');
// let getLastDate;

// // display last update date
// function displayLastUpdate() {
// 	getLastDate = drawHistory.length;
// 	lastUpdate.innerHTML = drawHistory[getLastDate - 1][0];
// }

// // build draw table ***************************
// function buildDrawTable() {
// 	loadDrawTable();
// }

// const drawTableBody = document.getElementById('draw-data');
// let drawTableHTML = '';

// function loadDrawTable() {
// 	drawHistory.forEach(populateDrawTable);
// }

// function populateDrawTable(item) {
// 	drawTableHTML += `<tr>
//                 <td class="draw-date">${item[0]}</td>
//                 <td class="off" id="no${item[1]}">${item[1]}</td>
//                 <td class="off" id="no${item[2]}">${item[2]}</td>
//                 <td class="off" id="no${item[3]}">${item[3]}</td>
//                 <td class="off" id="no${item[4]}">${item[4]}</td>
//                 <td class="off" id="no${item[5]}">${item[5]}</td>
//                 <td class="off" id="no${item[6]}">${item[6]}</td>
//                 <td class="off" id="no${item[7]}">${item[7]}</td>
//               </tr>`;
// 	console.log(drawTableHTML);
// 	drawTableBody.innerHTML = drawTableHTML;
// }

// // OnClick Functions CTA
// function sortByName() {
// 	allPeoplePlaying = allPeoplePlaying.sort(function (a, b) {
// 		return a[0].localeCompare(b[0]);
// 	});
// 	playerTableHTML = '';
// 	buildPlayerTable();
// 	goGreen();
// }

// // function sortByTotal() {
// //   winnersArray = winnersArray.sort(function(a,b) {
// //     return b[1] - a[1];

// // })
// // buildWinnersTable();
// // };

// function sortByBallTotal() {
// 	allPeoplePlaying = allPeoplePlaying.sort(function (a, b) {
// 		return b[11] - a[11];
// 	});
// 	playerTableHTML = '';
// 	buildPlayerTable();
// 	goGreen();
// }

// function buildPlayerTable() {
// 	// runPersonMethods();
// 	loadPlayerTable();
// }

// const playerTableBody = document.getElementById('player-data');
// let playerTableHTML = '';

// function loadPlayerTable() {
// 	console.log(allPeoplePlaying);
// 	allPeoplePlaying.forEach(populatePlayerTable);
// }
// function populatePlayerTable(item) {
// 	playerTableHTML += `<tr>
//                 <td class="name">${item[0]}</td>
//                 <td class="off no${item[1]}">${item[1]}</td>
//                 <td class="off no${item[2]}">${item[2]}</td>
//                 <td class="off no${item[3]}">${item[3]}</td>
//                 <td class="off no${item[4]}">${item[4]}</td>
//                 <td class="off no${item[5]}">${item[5]}</td>
//                 <td class="off no${item[6]}">${item[6]}</td>
//                 <td class="off no${item[7]}">${item[7]}</td>
//                 <td class="off no${item[8]}">${item[8]}</td>
//                 <td class="off no${item[9]}">${item[9]}</td>
//                 <td class="off no${item[10]}">${item[10]}</td>
//                 <td class="player-total" id="${item[11]}">${item[11]}</td>
//               </tr>`;
// 	console.log(playerTableHTML);
// 	playerTableBody.innerHTML = playerTableHTML;
// }

// // *************WORKING***************************************
// function goGreen() {
// 	for (let i = 0; i < allPeoplePlaying.length; i++) {
// 		for (let j = 0; j < allPeoplePlaying[i].length; j++) {
// 			console.log(allPeoplePlaying[i][j]);
// 			let search = allPeoplePlaying[i][j];
// 			let match = uniqueNumbersDrawnArray.includes(allPeoplePlaying[i][j]);
// 			console.log(search + ' ' + match);
// 			let className = 'no' + allPeoplePlaying[i][j];
// 			console.log(className);
// 			if (match) {
// 				// let getTd =
// 				document.getElementsByClassName(className)[0].style.color = 'red';
// 				// console.log(getTd);
// 				let ele = document.getElementsByClassName(className);
// 				for (let k = 0; k < ele.length; k++) {
// 					ele[k].style.color = 'white';
// 					ele[k].style.backgroundColor = 'rgb(34,139,34)';
// 					ele[k].style.fontWeight = 'bolder';
// 				}
// 			} else {
// 			}
// 		}
// 	}
// }

// // BALL TABLE - populate and conditional formatting
// let ballTableHTML = '';
// let ballHTML = `<tr>`;
// let modCheck;
// let modCheck7;
// let y = 1;
// let row = 2;
// let column = 10;

// const ballsDrawnTableBody = document.getElementById('ball-data');

// function ballTest() {
// 	lottoNumberRange.forEach(ballDisplay);
// 	console.log(ballHTML);
// }

// function ballDisplay(index) {
// 	modCheck = index % 6;
// 	modCheck7 = (index % 6) + 1;
// 	console.log(`index is ${index}`);
// 	console.log(`modcheck is ${modCheck}`);
// 	if (index === 0) {
// 		ballHTML += `<td class="ballbg ball${index}">00</td>`;
// 	} else if (index === 1) {
// 		console.log('this else should run once');
// 		ballHTML += `<td class="ballbg ball${index * 10}">
//     <button class="lotto-ball${index * 10} lotto-ball">${
// 			index * 10
// 		}</button></td>`;
// 	} else if (index >= 2 && index <= 5) {
// 		console.log('this should run 3 times');
// 		ballHTML += `<td class="ballbg ball${index * 10}">
//     <button class="lotto-ball${index * 10} lotto-ball">${
// 			index * 10
// 		}</button></td>`;
// 	} else if (modCheck == 0 && index === 6) {
// 		// z is the first ball on the row
// 		let z = 1;
// 		ballHTML += `</tr><tr>
//                   <td class="ballbg ball${z}">
//                   <button class="lotto-ball${z} lotto-ball">${z}</button></td>
//                   <td class="ballbg ball${z + 10}">
//                   <button class="lotto-ball${z + 10} lotto-ball">${
// 			z + 10
// 		}</button></td>
//                   <td class="ballbg ball${z + 20}">
//                   <button class="lotto-ball${z + 20} lotto-ball">${
// 			z + 20
// 		}</button></td>
//                   <td class="ballbg ball${z + 30}">
//                   <button class="lotto-ball${z + 30} lotto-ball">${
// 			z + 30
// 		}</button></td>
//                   <td class="ballbg ball${z + 40}">
//                   <button class="lotto-ball${z + 40} lotto-ball">${
// 			z + 40
// 		}</button></td>
//                   <td class="ballbg ball${z + 50}">
//                   <button class="lotto-ball${z + 50} lotto-ball">${
// 			z + 50
// 		}</button></td>`;
// 	} else if (modCheck7 == 1 && index > 6) {
// 		let x = row++;
// 		ballHTML += `</tr><tr>
//                   <td class="ballbg ball${x}">
//                   <button class="lotto-ball${x} lotto-ball">${x}</button></td>
//                   <td class="ballbg ball${x + 10}">
//                   <button class="lotto-ball${x + 10} lotto-ball">${
// 			x + 10
// 		}</button></td>
//                   <td class="ballbg ball${x + 20}">
//                   <button class="lotto-ball${x + 20} lotto-ball">${
// 			x + 20
// 		}</button></td>
//                   <td class="ballbg ball${x + 30}">
//                   <button class="lotto-ball${x + 30} lotto-ball">${
// 			x + 30
// 		}</button></td>
//                   <td class="ballbg ball${x + 40}">
//                   <button class="lotto-ball${x + 40} lotto-ball">${
// 			x + 40
// 		}</button></td>
//                   <td class="ballbg ball${x + 50}">
//                   <button class="lotto-ball${x + 50} lotto-ball">${
// 			x + 50
// 		}</button></td>`;
// 	} else {
// 		console.log('error building ball table');
// 	}
// 	ballsDrawnTableBody.innerHTML = ballHTML;
// }

// function populateBallTable(item) {
// 	playerTableHTML += `<tr>
//                 <td class="name">${item[0]}</td>
//                 <td class="off no${item[1]}">${item[1]}</td>
//                 <td class="off no${item[2]}">${item[2]}</td>
//                 <td class="off no${item[3]}">${item[3]}</td>
//                 <td class="off no${item[4]}">${item[4]}</td>
//                 <td class="off no${item[5]}">${item[5]}</td>
//                 <td class="off no${item[6]}">${item[6]}</td>
//                 <td class="off no${item[7]}">${item[7]}</td>
//                 <td class="off no${item[8]}">${item[8]}</td>
//                 <td class="off no${item[9]}">${item[9]}</td>
//                 <td class="off no${item[10]}">${item[10]}</td>
//                 <td class="player-total ${item[11]}">${item[11]}</td>
//               </tr>`;
// 	console.log(playerTableHTML);
// 	playerTableBody.innerHTML = playerTableHTML;
// }

// // 01/10/2019
// function displayBalls() {
// 	console.log(uniqueNumbersDrawnArray);
// 	uniqueNumbersDrawnArray.forEach(showBalls);
// }
// function showBalls(item, index) {
// 	console.log(item);
// 	console.log(index);
// 	let ball = '.ball' + item;
// 	let btn = '.lotto-ball' + item;
// 	console.log(ball);
// 	let x = document.querySelector(ball);
// 	x.style.background = 'lightgrey';
// 	x.style.color = 'black';
// 	x.style.fontWeight = 'bolder';
// 	let y = document.querySelector(btn);
// 	y.className += 's';
// 	// y.className += '.lotto-balls';
// }

// function inTheLead() {
// 	sortByBallTotal();
// 	for (let i = 0; i < allPeoplePlaying.length; i++) {
// 		console.log(allPeoplePlaying[i][11]);
// 		if (allPeoplePlaying[i][11] > allPeoplePlaying[i + 1][11]) {
// 			console.log(allPeoplePlaying[i][0]);
// 		} else if (allPeoplePlaying[i][11] === allPeoplePlaying[i + 1][11]) {
// 			console.log(allPeoplePlaying);
// 		}
// 	}
// }

// // js for the dropdown menu
// // document.getElementById('menu').addEventListener('mouseover', openMenu);

// // function openMenu() {
// //   document.getElementById('dropdown').classList.toggle('active');
// // };

// document
// 	.getElementById('display-draw')
// 	.addEventListener('click', showDrawHistory);

// function showDrawHistory() {
// 	console.log('event');
// 	document.getElementById('draw-modal').classList.toggle('showDraw');
// 	document
// 		.getElementById('draw-history-container')
// 		.classList.toggle('showDraw');
// }

// document.getElementById('draw-modal').addEventListener('click', hideDraw);

// function hideDraw() {
// 	document.getElementById('draw-modal').classList.toggle('showDraw');
// 	document
// 		.getElementById('draw-history-container')
// 		.classList.toggle('showDraw');
// }

// function awin() {
// 	allPeoplePlaying.forEach(bwin);
// }
// function bwin() {
// 	c = this[0];
// 	console.log(c);
// }

// //getting the winner and displaying flashing text
// let gameWinner = [];
// function isWinner() {
// 	// console.log('a');
// 	for (let i = 0; i < allPeoplePlaying.length; i++) {
// 		// for(let j = 0; j < allPeoplePlaying[i].length; j++){
// 		// console.log(allPeoplePlaying[i][j]);
// 		if (allPeoplePlaying[i][11] === 10) {
// 			gameWinner.push(allPeoplePlaying[i][0]);
// 			console.log(`${allPeoplePlaying[i][0]} is the winner`);
// 			flashingWinner();
// 		} else {
// 			console.log(`${allPeoplePlaying[i][0]} hasnt won`);
// 		}

// 		console.log(gameWinner);
// 	}
// }

// // if(allPeoplePlaying.includes(10)) {
// //   console.log('winner');
// // }
// // else  {
// //   console.log('no winner');
// // }
// // else {
// //   console.log('error checking for winner');
// // }

// // flashing text for winner
// function flashingWinner() {
// 	let t = document
// 		.getElementById('display-winner')
// 		.classList.toggle('toggle-winner');
// 	// let n = document.getElementById()
// 	let f = document.getElementById('flashing-winner');
// 	setInterval(function () {
// 		f.innerHTML = gameWinner[0];
// 		f.style.display = f.style.display == 'none' ? '' : 'none';
// 	}, 1000);
// }
