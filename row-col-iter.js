/**
 * @subject - On vous donne 3 entiers, dont "n" represente le nombre de depart, "s" represente le nombre de ligne et colonne, "o" represente le compteur a chaque iteration de boucle. Votre programme doit imprimer un tableau a deux dimensions correspondant aux valeurs donnEes (voir l'exemple ci dessous). Si le nombre de colonne et ligne est 0, le programme doit imprimer "Nothing"
 * @exemple
-> input:
  n = 5 | s = 2 | o = 1
-> output:
  5 6
  6 7
-> input:
  n = 10 | s = 10 | o = 3
-> output:
  10 13 16 19 22 25 28 31 34 37 
  13 16 19 22 25 28 31 34 37 40 
  16 19 22 25 28 31 34 37 40 43 
  19 22 25 28 31 34 37 40 43 46 
  22 25 28 31 34 37 40 43 46 49 
  25 28 31 34 37 40 43 46 49 52 
  28 31 34 37 40 43 46 49 52 55 
  31 34 37 40 43 46 49 52 55 58 
  34 37 40 43 46 49 52 55 58 61 
  37 40 43 46 49 52 55 58 61 64
-> input:
  n = 500 | s = 0 | o = 10
-> output:
  Nothing
 * @feat - Array() | String()
*/
function rowColIter() {
	const n = 10; // nombre de depart
	const s = 10; // nombre de ligne et colonne
	const o = 3; // iteration

	// init 1d array
	let array = new Array(s);

	// init 2d array
	for (let i = 0; i < array.length; i++) {
		array[i] = [];
	}

	let firstCounter = n;
	let tmp = firstCounter;

	// inject 2d array value
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			array[i][j] = j === 0 ? firstCounter : tmp;
			if (j === 0) {
				firstCounter += o;
				tmp = firstCounter;
			} else {
				tmp += o;
			}
		}
	}

	function showArray2D(array) {
		let whiteSpace = '';
		if (array.length === 0) {
			console.log('Nothing');
		} else {
			for (let i = 0; i < array.length; i++) {
				for (let j = 0; j < array.length; j++) {
					if (array[i][j] < 9) {
						whiteSpace += String(array[i][j]) + '  ';
					} else {
						whiteSpace += String(array[i][j]) + ' ';
					}
				}
				console.log(whiteSpace);
				whiteSpace = '';
			}
		}
	}

	// output
	showArray2D(array);
}

rowColIter();
