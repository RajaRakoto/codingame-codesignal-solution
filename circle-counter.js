/**
 * @sujet - Imprimez le nombre total de cercles dans chaque numero.
 * @exemple - 0, 6 et 9 ont 1 cercle tandis que 8 en a 2 | si n = '8809 00' | result -> 8
 * @feat - parseInt() | split() | push() | Set() | forEach()
 */
function circleCounter() {
	const n = '8809 00';

	// method 1
	let result = 0;
	Array.from(n)
		.filter(n => n != ' ')
		.forEach(n => {
			n == 8
				? (result += 2)
				: n == 0 || n == 9 || n == 6
				? (result += 1)
				: (result += 0);
		});
	console.log(result);

	// method 2
  // console.log(Array.from(n).map(n => {(n == 8) ? n = 2 : (n == 0 || n == 9 | n == 6) ? n = 1 : n = 0}))
  console.log(Array.from(n).filter(n => n != ' ').map)
}

circleCounter();
