/**
 * @subject - Etant donnEe une liste de nombre, sortir le 2e plus petit nombre
 * @exemple - N = [5, 66, 91, 2, 43, 3, 0] | result -> 2
 * @feat - sort()
 */

function sortSecond() {
	const N = [5, 66, 91, 2, 43, 3, 0];
	console.log(N.sort((a, b) => a - b)[1]);
}

sortSecond();
