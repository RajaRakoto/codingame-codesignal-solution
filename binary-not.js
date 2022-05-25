/* Votre programme doit imprimer le NOT (inverse) d'un nombre binaire B | ex: B = 101100 -> 010011 */

// method 1
const B = '101100';
let result = [];

Array.from(B).forEach(b => {
	b === '1' ? result.push('0') : result.push('1');
});

console.log(Number(result.join('')));

// method 2
console.log(Number(B.replaceAll('1', 'a').replaceAll('0', '1').replaceAll('a', '0')));
