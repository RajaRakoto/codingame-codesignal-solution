/**
 * @subject -  Votre prgramme doit extraire tout les entiers contenu dans une chaine de caractere
 * @exemple - string =  "Cat 10, Dog 5, Bird 8" | result -> 1058
 * @feat - string.match() | join() 
 */
function extractNumber() {
	const string = 'Cat 10, Dog 5, Bird 8';
	let integer = string.match(/\d/g); // extraire tout les nombres

	console.log(integer.join(''));
}

extractNumber();
