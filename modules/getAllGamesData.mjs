

export function renderGameHistoryTable(){
  // console.log('in game history func')
  	// get the api data
	fetch('/JSON/draws.json', { cache: 'no-cache' })
  //convert it to json
  .then((result) => result.json())
  //access the data
  .then((data) => {
    // console.log(data);
    // testData.innerText = data;
    // storeDataFromFetch(data.allSongs);
    // sortAllSongs(allSongArr);
  });
}


function storeDataFromFetch(data) {
	// console.log(data);
	allSongArr = data;
	// console.log(allSongArr);
	// sortAllSongs(allSongArr);
}
// working promise

function init() {
	// get the api data
	fetch('/json/db.json', { cache: 'no-cache' })
		//convert it to json
		.then((result) => result.json())
		//access the data
		.then((data) => {
			// console.log(data);
			// testData.innerText = data;
			storeDataFromFetch(data.allSongs);
			sortAllSongs(allSongArr);
		});
}