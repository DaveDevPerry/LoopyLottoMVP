// *************************** DRAW DETAILS *************************************************************
// DRAW INPUT

// DRAW ARRAYS
let drawHistory = [];
let drawHistoryCounter;
let allNumbers = [];
let allNumbersDrawnCounter;
let allNumbersDrawnArray = [];
// let uniqueNumbersDrawnArray = [];
// let drawNumbers;

// ********************DRAW CLASS*************************************************
const draw1 = new NewDrawNumbers('08/08/2020', 2, 40, 41, 58, 53, 56, 49);
// const draw2 = new NewDrawNumbers('14/03/2020', 7, 22, 30, 38, 42, 47, 14);
let drawMethods = [draw1];
// OBJECT CONSTRUCTOR - to input each draw based  on a template

function NewDrawNumbers(
	drawDate,
	ball1,
	ball2,
	ball3,
	ball4,
	ball5,
	ball6,
	bb
) {
	this.drawDate = drawDate;
	this.ball1 = ball1;
	this.ball2 = ball2;
	this.ball3 = ball3;
	this.ball4 = ball4;
	this.ball5 = ball5;
	this.ball6 = ball6;
	this.bb = bb;
	this.addDrawToHistory = function () {
		drawHistory.push({ [this.drawDate]: [this.ball1, this.ball2] });
		// console.log(drawHistory);
	};
	this.addNumbersToAllNumbers = function () {
		// add numbers from this draw to all numbers array
		allNumbersDrawnArray.push(
			this.ball1,
			this.ball2,
			this.ball3,
			this.ball4,
			this.ball5,
			this.ball6,
			this.bb
		);
		// console.log(allNumbersDrawnArray);
	};
}
function runDrawMethods() {
	// runs the methods in the object constructor
	for (let i = 0; i < drawMethods.length; i++) {
		if (drawMethods[i]) {
			drawMethods[i].addDrawToHistory();
			drawMethods[i].addNumbersToAllNumbers();
		}
		allNumbersDrawnCounter = allNumbersDrawnArray.length;
		// getUniqueNumbers();
	}
}
