/* Votre programme doit imprimer N fois la chaine en entree. Si N est 0, affiche "empty". A noter que chaque chaine est concatenE entre eux pour N <= 2 ! | ex: N = 1, string = "string" -> string */

const N = 1;
const string = 'string';

let result = '';

console.error(N);

for (let i = 0; i < N; i++) {
	result += string;
}

console.log(N !== 0 ? result : 'empty');
