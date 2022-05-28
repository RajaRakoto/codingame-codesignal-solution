/**
 * @sujet - Touve la racine carree du plus petit nombre carre parfait dans une liste de nombre donnE "ListN", retourne 0 si la liste contient une valeur indefini
 * @example - listN = [5, 12, 8, 21, 25, undefined, 16] | result -> 0
 * @feat - Math.sqrt() | Number.isInteger() | push() | sort()
 */
function squareTest() {
	let listN = [5, 12, 8, 21, 25, undefined, 16];
	let M = [];

	listN.forEach(n => {
		let testN = n !== undefined ? Math.sqrt(n) : 0;

		// tester si le resultat du testN est un entier
		if (Number.isInteger(testN)) {
			M.push(testN);
		}
	});

	console.log(
		M.sort((a, b) => {
			return a - b;
		})[0],
	);
}

squareTest();
