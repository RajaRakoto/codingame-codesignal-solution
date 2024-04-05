/**
 * @subject - Votre programme doit afficher une ou plusieurs ligne(s) qui contient un curseur "o" indiquant le pourcentage par rapport a ce dernier (voir exemple). La longueur d'une ligne correspond a l'entrE "L", "listP" represente la liste des valeurs en pourcentage, la longeur de ce dernier correpsond donc au nombre de ligne a imprimer
 * @exemple 
 Si L = 10, listP = [50] | result -> "----o-----"
 Si L = 20, listP = [10, 20, 70, 40]
 result:
-o------------------
---o----------------
-------------o------
-------o------------
 * @feat - repeat() | forEach() | push() | join()
 */
function cursor() {
	const L = 20; // length
	const listP = [10, 20, 70, 40]; // percentage list

	// create line
	const line = "-".repeat(L);

	// get percentage index in line
	function calcPercentage(percentage, length) {
		return (percentage * length) / 100 - 1;
	}

	let result = [];

	// set line value
	listP.forEach((lp) => {
		let arrayOfLine = [...line];
		arrayOfLine[calcPercentage(lp, L)] = "o";
		result.push(arrayOfLine.join``);
	});

	// output
	result.forEach((r) => {
		console.log(r);
	});
}

cursor();
