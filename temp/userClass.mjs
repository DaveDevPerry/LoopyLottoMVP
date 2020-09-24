// OBJECT CONSTRUCTOR  -  creates an object blue print for each player to save a lot of code
export function User(
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
		console.log('update numbers function');
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
