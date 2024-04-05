/**
 * @subject - Votre programme doit inverser la casse d'une chaîne donnée. difference entre ce nombre est son inverse
 * @exemple - s = "HellO wOrlD !" | result -> "hELLo WoRLd !"
 * @feat - test() | toLowerCase() | toUpperCase() | join()
 */
function revertCase() {
	const s = 'HellO wOrlD !';

	const isUpper = str => {
		return !/[a-z]/.test(str) && /[A-Z]/.test(str);
	};

	console.log(
		[...s].map(s => (isUpper(s) ? s.toLowerCase() : s.toUpperCase())).join``,
	);
}

revertCase();
