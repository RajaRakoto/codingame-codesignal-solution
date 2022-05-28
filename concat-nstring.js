/**
 * @sujet - Votre programme doit imprimer N fois la chaine en entree. Si N est 0, affiche "empty". A noter que chaque chaine est concatenE entre eux pour N <= 2
 * @exemple - N = 1 | string = "string" | result -> string
 */
function concatString() {
	const N = 1;
	const string = 'string';
	let result = '';

	for (let i = 0; i < N; i++) {
		result += string;
	}

	console.log(N !== 0 ? result : 'empty');
}

concatString();
