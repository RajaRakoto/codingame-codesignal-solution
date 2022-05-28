/**
 * @sujet - Votre programme doit imprimer un array en fonction de deux valeurs en entree dont L represente la longueur de chaque tableau et N represente le nombre de tableau a afficher, l'element du tableau est un valeur incrementE allant de 1
 * @exemple - L = 2 | N = 4 | result -> [ 1, 2 ] [ 3, 4 ] [ 5, 6 ] [ 7, 8 ]
 * @feat - push()
 */
function arrayCounter() {
	const L = 2; // length of array
	const N = 4; // number of array

	let arrayIndiv = [];
	let arrayGlob = [];
	let elem = 1;

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < L; j++) {
			arrayIndiv.push(elem++);
		}
		arrayGlob.push(arrayIndiv);
		arrayIndiv = []; // vider le tableau
	}

	console.log(...arrayGlob);
}

arrayCounter();
