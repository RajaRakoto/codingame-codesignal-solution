/**
 * @subject - Votre programme doit nettoyer une chaine de caractere donnEe en supprimant tout les caracteres speciaux, numeriques et les espaces blanc dupliquEs
 * @exemple - s = "Hello, World !" | result -> "Hello World" | s = "th3 qu1ck br0wn" | result -> "Th quck brwn"
 * @feat - replaceAll() | replace()
 */
function stringCleaner() {
	const s = "th3 qu1ck br0wn";

	function removeSpecialChars(str) {
		str = str.replaceAll("_", ""); // supprimer les underscores
		return str
			.replace(/\s+/g, " ") // supprimer les espaces dupliquEs
			.replace(/[0-9]/g, "") // supprimer les caracteres numeriques
			.replace(/^(\s*)([\W\w]*)(\b\s*$)/g, "$2") // supprimer les caracteres speciaux
			.replace(/(?!\w|\s)./g, "");
	}

	console.log(removeSpecialChars(s));
}

stringCleaner();
