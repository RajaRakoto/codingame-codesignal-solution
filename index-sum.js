/**
 * @sujet - Calculez la somme des nombres aux indices donnEs
 * @exemple - count = [2, 2, 3] | index = [1, 2] | result -> 5
 * @feat - forEach()
 */
function indexSum() {
	const count = [2, 2, 3];
	const index = [1, 2];

	let result = 0;
	index.forEach(index => {
		result += count[index];
	});

	console.log(result);
}

indexSum();
