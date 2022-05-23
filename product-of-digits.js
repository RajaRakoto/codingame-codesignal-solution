/*
Imprimer le produit de tous les chiffres d'un nombre n | ex: n = 1234 -> 24 (1*2*3*4)
*/

const n = 1234;
const m = Array.from(String(n));
let result = 1;

m.forEach(number => {
	result *= Number(number);
});

console.log(result);
