// OBJECT CONSTRUCTOR  -  creates an object blue print for each player to save a lot of code
function Person(
  name,
  no1,
  no2,
  no3,
  no4,
  no5,
  no6,
  no7,
  no8,
  no9,
  no10,
  isPlaying
) {
  this.name = name;
  this.no1 = no1;
  this.no2 = no2;
  this.no3 = no3;
  this.no4 = no4;
  this.no5 = no5;
  this.no6 = no6;
  this.no7 = no7;
  this.no8 = no8;
  this.no9 = no9;
  this.no10 = no10;
  this.isPlaying = isPlaying;
  this.totalMatched;
  this.playerNumbersOnlyArray = [];
  this.addToAllPlayers = function () {
    allPeopleArray.push([
      this.name,
      this.no1,
      this.no2,
      this.no3,
      this.no4,
      this.no5,
      this.no6,
      this.no7,
      this.no8,
      this.no9,
      this.no10,
      this.isPlaying,
    ]);
  };
  this.sortPeoplePlaying = function () {
    if (this.isPlaying) {
      allPeoplePlaying.push([
        this.name,
        this.no1,
        this.no2,
        this.no3,
        this.no4,
        this.no5,
        this.no6,
        this.no7,
        this.no8,
        this.no9,
        this.no10,
        this.isPlaying,
      ]);
      playingCounter++;
      console.log(allPeoplePlaying);
      this.playerNumbersOnlyArray.push(
        this.no1,
        this.no2,
        this.no3,
        this.no4,
        this.no5,
        this.no6,
        this.no7,
        this.no8,
        this.no9,
        this.no10
      );
    } else if (this.isPlaying === false) {
      allPeopleNotPlaying.push([
        this.name,
        this.no1,
        this.no2,
        this.no3,
        this.no4,
        this.no5,
        this.no6,
        this.no7,
        this.no8,
        this.no9,
        this.no10,
        this.isPlaying,
      ]);
      notPlayingCounter++;
    } else {
      alert(`something has gone wrong in sortPeoplePlaying method`);
    }
  };
  this.updateNumbers = function () {
    // checks to see if players numbers match and in uniquenumber array
    console.log("update numbers function");
    console.log(this);
    // get all numbers for this player and store in new this.array
    this.playerNumbersOnlyArray.push(
      this.no1,
      this.no2,
      this.no3,
      this.no4,
      this.no5,
      this.no6,
      this.no7,
      this.no8,
      this.no9,
      this.no10
    );
    // console.log(this.playerNumbersOnlyArray);
  };
}
// function - run person methods
function runPersonMethods() {
  for (let i = 0; i < personMethods.length; i++) {
    if (personMethods[i]) {
      personMethods[i].updateNumbers();
      personMethods[i].addToAllPlayers();
      personMethods[i].sortPeoplePlaying();
    } else {
      alert(`error running personMethods function`);
    }
  }
}
// allPeoplePlaying = allPeoplePlaying.sort(function(a, b) {
//   return a[1].localeCompare(b[1]);
// *************************** DRAW DETAILS *************************************************************
// DRAW INPUT
const draw1 = new NewDrawNumbers("12/02/2020", 2, 3, 5, 27, 51, 54, 6);
const draw2 = new NewDrawNumbers("15/02/2020", 10, 11, 33, 41, 45, 54, 18);
const draw3 = new NewDrawNumbers("19/02/2020", 7, 18, 21, 27, 28, 48, 10);
const draw4 = new NewDrawNumbers("22/02/2020", 21, 23, 25, 27, 36, 47, 17);
const draw5 = new NewDrawNumbers("26/02/2020", 19, 20, 27, 49, 52, 57, 4);
const draw6 = new NewDrawNumbers("29/02/2020", 25, 32, 34, 52, 55, 58, 9);
const draw7 = new NewDrawNumbers("04/03/2020", 4, 7, 14, 19, 50, 56, 8);
const draw8 = new NewDrawNumbers("07/03/2020", 5, 29, 35, 36, 40, 44, 42);
// const draw9 = new NewDrawNumbers('30/10/2019',2,8,19,41,51,56,23);
// const draw10 = new NewDrawNumbers('02/11/2019',13,16,28,34,41,56,40);
// const draw11 = new NewDrawNumbers('06/11/2019',17,22,25,27,32,35,5);
// const draw12 = new NewDrawNumbers('09/11/2019',2,11,16,46,51,58,31);

// DRAW ARRAYS
let drawHistory = [];
let allNumbers = [];
let drawMethods = [draw1, draw2, draw3, draw4, draw5, draw6, draw7, draw8];
// ,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9,draw10,draw11,draw12];
let allNumbersDrawnArray = [];
let uniqueNumbersDrawnArray = [];
let drawNumbers;

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
    // add this draw to draw history
    drawHistory.push([
      this.drawDate,
      this.ball1,
      this.ball2,
      this.ball3,
      this.ball4,
      this.ball5,
      this.ball6,
      this.bb,
    ]);
    drawHistoryCounter++;
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
