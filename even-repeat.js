/**
 * @sujet -  Si le nombre d'entrée n est pair, divisez-le par deux, et si le résultat est toujours pair, répétez le processus k fois, jusqu'à ce que le nombre résultant p soit impair, et sortez p.
 * @exemple n = 50 | result = 25 | n = 3 | result -> 3
 * @feat -
 */
function evenRepeat() {
	const n = 50;
	let result = n % 2 == 0 ? n / 2 : n;
	while (result % 2 == 0) {
		result /= 2;
	}

	console.log(result);
}

evenRepeat();
