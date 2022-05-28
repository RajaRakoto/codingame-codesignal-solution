/**
 * @sujet - Votre programme doit calculer le nombre d'annees bissextiles entre 2 annees "a" et "b" y compris les 2 si ils sont aussi bissextiles
 * @exemple - entre 1800 ~ 2400 | result -> 146 annees bissextiles
 */
function leapYear() {
	let a = 1800;
	let b = 2400;
	let counter = 0;

	function checkLeapYear(year) {
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			return true;
		} else {
			return false;
		}
	}

	while (a <= b) {
		checkLeapYear(a) ? counter++ : (counter = counter);
		a++;
	}

	console.log(counter); // 146
}

leapYear();
