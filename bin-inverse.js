/**
 * @sujet - Le but est de retourner tous les bits d'un nombre. N'inversez pas les zéros non significatifs.
 * @exemple -  n = 9, en binaire 1001, si on inverse tout les bits on obtient 0110 | result -> 6 (en decimal)
 * @feat - Array.from() | toString() | join() | parseInt() | map()
 */
function binInverse() {
	const n = 9;
	const bin = Array.from(n.toString(2)).map(b => (b === '0' ? '1' : '0'))
		.join``;
	console.log(parseInt(bin, 2));
}

binInverse();
