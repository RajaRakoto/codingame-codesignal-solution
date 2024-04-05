/**
 * @subject - Imprimez le total des voyelles dans une chaine donnEe
 * @exemple - s = "Hello World" | result -> 3
 * @feat - match()
 */
function vowelsCounter() {
	s = 'Hello World';
	console.log(s.match(/[aeiou]/gi).length);
}

vowelsCounter();
