/**
 * @sujet - Les citoyens de byteland jouent regulierement a un jeu, ils ont des block representant chacun un nombre entier de 0 a 9. Ceux-ci sont disposEs ensemble de maniere aleatoire sans voir pour former deux nombres differents en gardant a l'esprit que le premier bloc n'est jamais un 0. Une fois qu'ils forment un nombre, ils lisent dans l'ordre inverse pour verifier si le nombre et son inverse sont identiques. Si les deux sont identiques, le joueur gagne. Votre programme doit alors imprimer "wins" si le nombre et son inverse sont identique sinon il doit imprimer "loses"
 * @exemple - a = 131 | result -> wins
 * @feat - split() | reverse() | join()
 */
function palindrome() {
	const a = 131;
	console.log(a == String(a).split('').reverse().join('') ? 'wins' : 'loses');
}

palindrome();
