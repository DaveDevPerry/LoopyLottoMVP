export function renderGameHistoryTable(){
  // console.log('in game history func')
  	// get the api data
	fetch('/JSON/draws.json', { cache: 'no-cache' })
  //convert it to json
  .then((result) => result.json())
  //access the data
  .then((data) => {
  });
}


function storeDataFromFetch(data) {
	allSongArr = data;
}

function init() {
	// get the api data
	fetch('/json/db.json', { cache: 'no-cache' })
		//convert it to json
		.then((result) => result.json())
		//access the data
		.then((data) => {
			// testData.innerText = data;
			storeDataFromFetch(data.allSongs);
			sortAllSongs(allSongArr);
		});
}