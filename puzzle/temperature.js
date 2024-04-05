/**
 * @subject - Écrivez un programme qui affiche la température la plus proche de 0 parmi les données d'entrée. Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro (par exemple, si les températures sont -5 et 5, alors afficher 5).
 * @exemple - inputs = "-12 -5 -137" | result -> -5
 * @link - https://www.codingame.com/training/easy/temperatures
 * @progress - 72%
 */
function temperature() {
	var inputs = '1 -2 -8 4 5'.split(' ');

	const sort = inputs.sort((a, b) => a - b);
	const neg = sort.filter(n => n < 0);
	const pos = sort.filter(n => n > 0);
	const posMin = pos[0];
	const negMax = Math.abs(neg[neg.length - 1]);

	console.log(
		inputs == ''
			? 0
			: pos == ''
			? -1 * negMax
			: posMin < negMax
			? posMin
			: negMax,
	);
}

temperature();
