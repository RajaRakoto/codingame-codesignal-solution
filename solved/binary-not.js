/**
 * @subject - Votre programme doit imprimer le NOT (inverse) d'un nombre binaire B
 * @exemple - B = 101100 | result -> 010011
 * @feat - Array.from() | forEach() | push() | join() | Number() | replaceAll()
 */
function binaryNot() {
	// method 1
	const B = '101100';
	let result = [];

	[...B].forEach(b => {
		b === '1' ? result.push('0') : result.push('1');
	});

	console.log(Number(result.join('')));

	// method 2
	console.log(
		Number(B.replaceAll('1', 'a').replaceAll('0', '1').replaceAll('a', '0')),
	);
}

binaryNot();
