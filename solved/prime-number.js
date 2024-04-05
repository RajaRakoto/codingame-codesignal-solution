/**
 * @subject - Vous devez trouver le plus grand nombre premier parmi une liste de nombres donnée en entrée.
 * @exemple - n = [0, 1, 2, 3, 5, 6, 8, 9] | result -> 5
 * @feat - Math.max() | split()
 */
function primeNumber() {
	const primeChecker = (n) => {
		for (var i = 2; i < n; i++) if (n % i === 0) return false;
		return n > 1;
	};

	a = [];
	n = "0 1 2 3 5 6 8 9".split(" ");

	for (let i = 0; i < n.length; i++) {
		a.push(primeChecker(n[i]) ? n[i] : 0);
	}

	console.log(Math.max(...a));
}

primeNumber();
