/**
 * @subject - Sur une site web de commerce, nous devons generer un systeme de notation par etoiles basE sur toutes les notes qu'un produit a recues arrondies a l'inferieur
 * @exemple - N = "2,5,2,5,2,5" | result -> ***
 * @feat - repeat() | trunc() | split() | map() | Number() | reduce()
 */
function stars() {
	const N = '2,5,2,5,2,5'; // 2+5+2+5+2+5 = 21/6 = 3.5 -> 3

	console.log(
		'*'.repeat(
			Math.trunc(
				[...N.split(',')].map(n => Number(n)).reduce((total, n) => total + n) /
					N.split(',').length,
			),
		),
	);
}

stars();
