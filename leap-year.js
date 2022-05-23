/*
Votre programme doit calculer le nombre d'annees bissextiles entre 2 annees "a" et "b" | ex:  entre 1800 ~ 2400 -> 146 annees bissextiles
*/

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
