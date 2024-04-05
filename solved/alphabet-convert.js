/**
 * @subject - Votre programme doit convertir tout les caracteres de l'alphabet a l'index correspondant
 * @exemple str = "gdi" | result -> 749 | str = "ajul" | result -> 1102112 | str = "21g3abt" | result -> 21791220
 * @feat - toLowerCase() | fromCharCode() | keys() | slice() | indexOf() | map() | join()
 * @note - Les caracteres speciaux et numeriques restent le meme
 */
function alphabetConvert() {
	const str = "21g3abt";
	const str2 = [...str].map((s) => s.toLowerCase());
	const alphabet = [...String.fromCharCode(...Array(123).keys()).slice(97)];
	const result = str2.map((s) =>
		alphabet.indexOf(s) == -1 ? s : alphabet.indexOf(s) + 1,
	);
	console.log(result.join``);
}

alphabetConvert();
