/**
 * @sujet - Pour un texte donnE "t", remplacer toutes les sequences du caractere donnE "n" par le nombre de caracteres dans cette sequence. Le texte ne peut contenir que des caracteres ASCII
 * @exemple - t = "hello world !" | n = "l" | result -> "he2o wor1d !"
 * @feat - split() | forEach() | push() | replaceAll() | Array.from()
 */
function replaceAll(params) {
	const n = 'l';
	const t = 'hello world !';
	let result = [];
	let resultFiltered = [];
	let finalResult = [];

	// separer les chaines
	const splitT = t.split(' ');

	// comptage de l'occ n dans splitT
	let counterArray = [];
	let counter = 0;
	splitT.forEach(t => {
		Array.from(t).forEach(t => {
			if (t === n) {
				counter++;
			}
		});
		counterArray.push(counter);
		counter = 0;
	});

	// replacer n value par l'element contenu dans counterArray
	splitT.forEach(t => {
		result.push(t.replace(n, counterArray[counter]));
		counter++;
	});

	// filter le resultat obtenu
	result.forEach(r => {
		resultFiltered.push(Array.from(r).filter(r => r != n));
	});

	// fusionner le resultat filtrE
	resultFiltered.forEach(f => {
		finalResult.push(f.join(''));
	});

	console.log(finalResult.join(' '));
}

replaceAll();
