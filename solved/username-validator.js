/**
 * @subject - Vous devez ecrire une programme qui verifie si le nom d'utilisateur donnE "u" est valable | un nom d'utilisateur doit: avoir au moins 3 caracteres, ne pas depasser 20 caracteres, ne comporter que des lettres et des chiffres [a-z] [A-Z] [0-9] | si le nom d'utilisateur repond a ces exigences, imprimez "VALID" sinon "INVALID"
 * @exemple - u = "rakotoNirina07" | result -> VALID | u = "_rasoa5_" | result -> INVALID
 * @feat - test()
 */
function userNameValidator() {
	const u = "rakotoNirina07";
	const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	if (u.length >= 3 && u.length <= 20 && !format.test(u)) {
		// La méthode test() vérifie s'il y a une correspondance entre un texte (en argument) et une expression rationnelle (regExpr). Elle retourne true en cas de succès sinon false
		console.log("VALID");
	} else {
		console.log("INVALID");
	}
}

userNameValidator();
