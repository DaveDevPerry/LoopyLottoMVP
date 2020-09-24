export function runDrawMethods() {
	let drawMethods = [draw1];
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
