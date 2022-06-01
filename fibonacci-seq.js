/**
 * @sujet - Construisez la sequence de Fibonacci mais avec des entrEes donnEes au lieu d'entrEes definies, 0 et 1. Faite une sequence additive avec "t" un certain nombre de fois pour boucler, "a" un premier chiffre de depart et "b" un deuxieme chiffre de depart
 * @exemple - t = 10 | a = 0 | b = 1 | result -> 0 1 1 2 3 5 8 13 21 34 55 89
 * @feat - forEach() | push()
 */
function fibonacciSeq() {
	const t = 10;
	const a = 0;
	const b = 1;

	let counter = 0;
	let result = [a, b];
	let aCounter = 0;
	let bCounter = aCounter + 1;

	while (counter < t) {
		result.push(result[aCounter] + result[bCounter]);
		aCounter++;
		bCounter++;
		counter++;
	}

	result.forEach(r => {
		console.log(r);
	});
}

fibonacciSeq();
