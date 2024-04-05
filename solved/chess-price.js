/**
 * @subject - Dans un club d'échecs, les gens peuvent apporter des pièces d'échecs à vendre. Le coût des pièces est la valeur aux échecs de chacune (9 pour la reine, 5 pour la tour, 4 pour le roi, 3 pour le fou et le cavalier, et 1 pour chaque pion) multipliée par 100 $ dans le cas où l'ensemble n'inclut pas un roi, ou 200 $ si c'est le cas. L'objectif est de calculer le prix d'un ensemble de 5 pièces donné. Une ligne contenant une chaîne S, composée de 5 caractères. Chacun indique une pièce : "Q" pour dame, "K" pour roi, "B" pour fou, "N" pour cavalier, "P" pour pion et "R" pour tour. Les caractères peuvent être répétés indiquant plus d'une pièce de la même valeur
 * @exemple 
s = QRBNP | result -> 2100$
s = NNPPP | result -> 900$
 * @feat - map() | reduce() | includes()
 */
function chessPrice() {
	const s = "QRBNP".map((e) =>
		e == "Q" ? 9 : e == "B" || e == "N" ? 3 : e == "R" ? 5 : e == "K" ? 4 : 1,
	);
	const total = s.reduce((n, t) => t + n);
	console.log(s.includes(4) ? total * 200 : total * 100 + "$");
}
chessPrice();
