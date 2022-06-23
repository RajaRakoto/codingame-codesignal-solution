/**
 * sujet - L’Hippodrome de Casablanca organise un nouveau type de course de chevaux : les duels. Lors d’un duel, seulement deux chevaux participent à la course. Pour que la course soit intéressante, il faut sélectionner deux chevaux qui ont une puissance similaire. Écrivez un programme qui, à partir d’un ensemble donné de puissances, identifie les deux puissances les plus proches et affiche leur écart avec un nombre entier positif.
 * exemple - N = [5,8,9] | result -> 1
 * link - https://www.codingame.com/ide/puzzle/horse-racing-duals
 * progress - 100%
 */
function duals() {
	const N = parseInt(readline());
	let arr = [];

	for (let i = 0; i < N; i++) {
		const pi = parseInt(readline());
		arr.push(pi);
	}

	const sorted = arr.sort((a, b) => a - b);
	let result = [];

	for (let j = 0; j < sorted.length; j++) {
		if (sorted[j + 1] !== undefined) {
			result.push(sorted[j + 1] - sorted[j]);
		}
	}

	console.log(result.sort((a, b) => a - b)[0]);
}

duals();
