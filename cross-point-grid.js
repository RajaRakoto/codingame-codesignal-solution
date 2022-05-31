/**
 * @sujet - Un tableau (tab1) de chaine contenant N caracteres representant la premiere grille, chaque caractere sera soit ".", "/" ou "\\". Un autre tableau (tab2) contenant N caracteres  representant la deuxieme grille, chaque caractere sera soit ".", "/" ou "\\". La sortie doit etre N lignes avec exactement N caracteres dans chaque ligne, qui sont la description de la grille de sortie comme decrit, chaque caractere doit etre soit '.', '/' , '\\' ou "X"
 * @exemple - Si tab1 = "/", tab2 = "/" | result -> "/" | Si tab1 = "/", tab2 = "." | result -> "/" | Si tab1 = ".", tab2 = "." | result -> "." | Si tab1 = "/", tab2="\\" | result -> "X" | Si tab1="\\", tab2="\\" | result -> "\\"
 * @note - La combinaison des grilles de tab1 et tab2 (comme montre l'exemple ci-dessus) est toujours commutative
 */
function crossPointGrid() {
	const tab1 = ['//.', './.', '/./', '.\\\\'];
	const tab2 = ['/.\\', './.', '\\/\\', './/'];

	let tab1Extract = [];
	let tab2Extract = [];
	let tabResult = [];

	tab1.map(t1 => {
		Array.from(t1).map(tt1 => {
			tab1Extract.push(tt1);
		});
	});

	tab2.map(t2 => {
		Array.from(t2).map(tt2 => {
			tab2Extract.push(tt2);
		});
	});

	for (let i = 0; i < tab1Extract.length; i++) {
		if (tab1Extract[i] === tab2Extract[i]) {
			tabResult.push(tab1Extract[i]);
		}

		if (tab1Extract[i] !== tab2Extract[i]) {
			if (tab1Extract[i] === '.' || tab2Extract[i] === '.') {
				tabResult.push(
					tab1Extract[i] === '.' ? tab2Extract[i] : tab1Extract[i],
				);
			} else {
				tabResult.push('X');
			}
		}
	}

	// pour verifier les entrees
	console.error(tab1Extract);
	console.error(tab2Extract);

	let counter = 0;
	let stringResult = '';

	for (let j = 0; j < tabResult.length; j++) {
		stringResult +=
			counter === tab1.length - 1 ? tabResult[j] + '\n' : tabResult[j];
		counter = counter === tab1.length - 1 ? 0 : counter + 1;
	}

	console.log(stringResult);
}
