/**
 * @sujet - Calculez le factoriel d'un nombre N
 * @exemple - N = 6 | result -> 720
 */
function factorial() {
	const N = 6;

	// method 1
	let tmp = N - 1;
	let fact = N;
	while (tmp > 1) {
		fact *= tmp;
		tmp--;
	}
	console.log(fact);

	// method 2
	const fact2 = N => (N > 0 ? N * fact2(N - 1) : 1);

	console.log(fact2(N));
}

factorial();
