/**
 * @subject -  On vous donne 3 entiers a, b et c. Votre programme doit afficher l'entier qui ne correspond pas au reste
 * @exemple -  a = 1, b = 0, c = 1 | result -> 0 | a = 6, b = 6, c = 9 | result -> 9
 */
function ternaryManip() {
	const [a, b, c] = [6, 6, 9];
	console.log(a === b ? c : a === c ? b : a);
}

ternaryManip();
