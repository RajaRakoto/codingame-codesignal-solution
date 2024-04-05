/**
 * @subject - Votre programme doit afficher la représentation binaire des nombres donnés en entrée. Chaque nombre est donné sur une nouvelle ligne. Votre programme doit afficher le résultat binaire suivi d'un retour à la ligne dans le même ordre que la lecture des nombres.
 * @exemple - decList = [0, 1, 3, 8, 255]
 result: 
0
1
11
1000
11111111
 * @feat - toString() | forEach()
 */
function dec2Bin() {
	const decList = [0, 1, 3, 8, 255];

	decList.forEach((dec) => {
		console.log(dec.toString(2)); // conversion du nombre decimal en binaire en utilisant la methode toString(2)
	});
}

dec2Bin();
