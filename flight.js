/**
 * @sujet - Un vol devait arriver a une heure particuliere et on estime maintenant qu'il arrivera a une autre heure. Ecrire une fonction qui revoie le statut du vol: "EARLY", "DELAYED" ou "ON TIME"
 * @exemple - t = "22:13:55", t2 = "22:12:23" | result -> "EARLY"
 * @feat - map() | reduce() | Number()
 */
function flight() {
	const t = '22:13:55';
	const t2 = '22:12:23';
	const tt = t.split(':').join``;
	const tt2 = t2.split(':').join``;

	console.log(tt < tt2 ? 'DELAYED' : tt > tt2 ? 'EARLY' : 'ON TIME');
}

flight();
