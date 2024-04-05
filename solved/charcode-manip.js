/**
 * @subject - Etant donnE une chaine d'entree "s", renvoie le caractere donne par la moyenne des valeurs ASCII de tous les caracteres de la chaine. "s" peut contenir des caracteres ASCII, des lettres majuscules, des lettres miniscules, des espaces ou des symboles. Si la valeur moyenne est un flottant, arrondissez vers le bas
 * @exemple - s = "hello" | result -> "j" | s = "HelLO wOrlD" | result -> "V" | s = "H3LL0 W0RLD" | result -> "A"
 * @feat - fromCharCode() | Math.floor() | Array.from() | map() | reduce() | charCodeAt()
 */
function charcodeManip() {
	const s = "HelLO wOrlD";

	console.log(
		String.fromCharCode(
			Math.floor(
				[...s].map((s) => s.charCodeAt()).reduce((total, c) => total + c) /
					s.length,
			),
		),
	);
}

charcodeManip();
