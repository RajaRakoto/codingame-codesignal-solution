/* Votre prgramme doit extraire tout les entiers contenu dans une chaine de caractere | ex:  "Cat 10, Dog 5, Bird 8" -> 1058 */

const string = 'Cat 10, Dog 5, Bird 8';

let integer = string.match(/\d/g);

console.log(integer.join(''));
