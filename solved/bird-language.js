/**
 * @subject - Convertissez les langages humain en entrer en bird language, pour ce faire Vous devez inserer la lettre p suivi de la voyelle une fois de plus
 * @exemple -  string = alex | result -> apalepex
 * @feat - forEach() | join() | indexOf()
 */
function birdLanguage() {
	const vowel = [..."a e i o u y"];
	const string = "arius";
	let stringArray = [...string];

	vowel.forEach((v) => {
		stringArray.forEach((s) => {
			if (v === s) {
				stringArray[stringArray.indexOf(s)] = s + "p" + s;
			}
		});
	});

	console.log(stringArray.join("")); // aparipiupus
}

birdLanguage();
