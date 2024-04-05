/**
 * @subject - Trouvez le point le plus proche de (0,0), on vous donne une liste de points, et vous devez trouver le point le plus proche de l'origine. Si deux points ont la meme distance, renvoie celui qui a ete donnE en premier dans la liste
 * @exemple - N = 3 | point = [ [ 1, 2 ], [ 2, 1 ], [ 3, 4 ] ] | result -> [ 1, 2 ]
 * @feat - push() | Math.sqrt() | Math.min() | indexOf() | join() | split()
 */
function zeroXY() {
	const N = parseInt(readline());
	let point = [];

	for (let i = 0; i < N; i++) {
		var inputs = readline().split(' ');
		const x = parseInt(inputs[0]);
		const y = parseInt(inputs[1]);
		point.push(inputs);
	}

	function distCalc(pt) {
		return Math.sqrt((pt[0] - 0) ** 2 + (pt[1] - 0) ** 2);
	}

	let distance = [];

	point.forEach(pt => {
		distance.push(distCalc(pt));
	});

	const min = distance.indexOf(Math.min(...distance));

	console.log(point[min].join` `);
}

zeroXY();