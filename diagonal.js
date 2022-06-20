/**
 * @sujet - On vous fourni un grille de texte de N lignes de N caracteres chacune. Votre programme doit calculer les mots situEs sur les deux diagonales de la grille. La premiere diagonale se lit du coin gauche vers le coin bas droit tandis que la deuxieme se lit du coin haut doit vers le coin bas gauche 
 * @exemple
 * input:
 mooa
 pano
 ptio
 ioon
 * output:
 main anti
 * @feat -
 */
function diagonal() {
	const array = ['mooa', 'pano', 'ptio', 'ioon'];

	function reader(a) {
		let counter = 0;
		let result = [];
		a.forEach(a => {
			result.push(a[counter]);
			counter++;
		});
		return result;
	}

	console.log(
		reader(array).join`` + ' ' + reader(array.reverse()).reverse().join``,
	);
}

diagonal();
