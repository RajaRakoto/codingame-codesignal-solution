/**
 * @sujet - Votre programme doit calculer l'aire d'un trapeze
 * @feat - toFixed()
 */
function trapeze() {
	const a = parseInt(readline());
	const b = parseInt(readline());
	const h = parseInt(readline());

	console.log((((a + b) * h) / 2).toFixed(1));
}

trapeze();
