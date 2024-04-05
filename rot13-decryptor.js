/**
 * @subject - Le ROT13 est un cas particulier du chiffre de César, un algorithme simpliste de chiffrement de texte. Comme son nom l’indique, il s’agit d’un décalage de 13 caractères de chaque lettre du texte à chiffrer. Ecrire un programme permettant de dechiffrer un message "M" codE en ROT13
 * @exemple - T = "uryyb jbeyq" | result -> "hello world"
 * @feat - fromCharCode() | replace() | charCodeAt() | toLowerCase()
 */
function rot13Decryptor() {
	const M = 'uryyb jbeyq';

	function rot13(message) {
		return message.replace(/[a-z]/gi, letter =>
			String.fromCharCode(
				letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13),
			),
		);
	}

	console.log(rot13(M));
}

rot13Decryptor();
