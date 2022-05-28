/**
 * @sujet - Appelons un groupe de nombres collectivement premiers si la somme des nombres uniques du groupe est premiere.
 Un entier positif est premier s'il a exactement 2 facteurs: 1 et lui meme. Les entiers inferieurs a 2, y compris les entiers negatifs, ne sont pas premiers 
 * @exemple - le groupe (1,5,7,5) est premier en commun puisqu'ils totalisent 13 qui est premier 
 * @feat - parseInt() | split() | push() | Set() | forEach() 
 */
function compositePrime() {
	const count = parseInt(readline());
	var inputs = readline().split(' ');

	let result = 0;
	let arrayN = [];

	for (let i = 0; i < count; i++) {
		const n = parseInt(inputs[i]);
		arrayN.push(n);
	}

	let uniqN = [...new Set(arrayN)]; // suppression des doublons

	uniqN.forEach(n => {
		result += n;
	});

	console.log(
		result % 2 === 1 && result > 1
			? `${result} is prime`
			: `${result} is composite`,
	);
}

compositePrime();
