/*
 convertissez les langages humain en entrer en bird language, pour ce faire Vous devez inserer la lettre p suivi de la voyelle une fois de plus | ex: alex -> apalepex
*/

const vowel = Array.from('a e i o u y');

const string = 'arius';

let stringArray = Array.from(string);

vowel.forEach(v => {
	stringArray.forEach(s => {
		if (v === s) {
			stringArray[stringArray.indexOf(s)] = s + 'p' + s;
		}
	});
});

console.log(stringArray.join('')); // aparipiupus
