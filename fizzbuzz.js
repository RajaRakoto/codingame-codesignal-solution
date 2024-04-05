/**
 * @subject
Imprimer les nombres de 1 à N chacun sur une nouvelle ligne sauf :
Si le nombre est divisible par 3 imprimer Fizz
Si le nombre est divisible par 5, imprimer Buzz
Si le nombre est divisible par 4, imprimer Bar
Si le nombre est divisible par 3 et 4, mais pas 5, imprimez FizzBar
Si le nombre est divisible par 5 et 4, mais pas 3, imprimez BuzzBar
Si le nombre est divisible par 5 et 3, mais pas 4, imprimez FizzBuzz
Si le nombre est divisible par les trois, imprimez FizzBuzzBar
 * @exemple
n = 5
output:
1 
2 
Fizz 
Bar 
Buzz
 */
function FizzBuzz() {
	const n = 5;
	for (i = 0; i < n; )
		console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
}

FizzBuzz();
