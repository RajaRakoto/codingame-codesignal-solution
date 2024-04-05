/**
 * @subject -  Considerons une chaine representant un entier positif N et un autre entier positif K
 * Vous devez:
 * a - inverse N chiffre
 * b - elevez chaque chiffre jusqu'au K-eme puissance
 * c - concatenez toutes ces representations de nombres de chaines et affichez le resultat R
 * @exemple - Si N = 7112236 et K = 3 | result -> 216278811343
 * @note - N et K sont donnEes dans une meme variable X de type string, vous devez trouver un moyen d'extraire la valeur correspondante
 * @feat -join() | split() | reverse() | map() | eval()
 */
function expReverseConcat() {
	const x = "7112236 3";
	console.log(
		[...x.split(" ")[0]].reverse().map((e) => eval(e + "**" + x.split(" ")[1]))
			.join``,
	);
}

expReverseConcat();
