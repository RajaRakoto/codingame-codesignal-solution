/**
 * @sujet - Un homme veut louer un appartement en centre-ville. Cet homme gagne qlq euros par heure. Considérez qu'il travaille 6 heures par jour pendant 5 jours chaque semaine pendant quatre semaines. L'appartement coûte b euros par quatre semaines. Vous devez également supposer que vous devez envisager de dépenser c euros toutes les quatre semaines pour d'autres raisons. Il faut produire "true" s'il peut s'offrir l'appartement ou "false" s'il ne le peut pas.
 * @exemple - a = 42 | b = 1200 | c = 1400 | result -> true
 */
function loyer() {
	const a = 42;
	const b = 1200;
	const c = 1400;
	console.log(a * 6 * 5 * 4 * 7 - c < b ? false : true);
}

loyer();
