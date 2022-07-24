/**
 * @sujet - Un tableau de N entiers et une liste de M gammes inclusives A et B, pour chaque plage, imprimez la somme des valeurs du tableau avec un indice entre A et B compris
 * @feat - push() | parseInt() | Number() | split() | forEach() | map() 
 */
function gmSum() {
	const N = parseInt(readline());
	var inputs = readline().split(' ');
	let ref = [];
	for (let i = 0; i < N; i++) {
		const X = parseInt(inputs[i]);
		ref.push(X);
	}

	const M = parseInt(readline());

	let plage = [];

	for (let i = 0; i < M; i++) {
		var inputs = readline().split(' ');
		const startRange = parseInt(inputs[0]);
		const endRange = parseInt(inputs[1]);
		plage.push(inputs);
	}

	function sum(plage, ref) {
		let start = Number(plage[0]);
		let end = Number(plage[1]);
		let result = 0;
		while (start <= end) {
			result += ref[start];
			start++;
		}
		return result;
	}

	let result = [];
	ref = ref.map(r => Number(r));

	plage.forEach(e => {
		result.push(sum(e, ref));
	});

	result.forEach(r => console.log(r));
}

gmSum();