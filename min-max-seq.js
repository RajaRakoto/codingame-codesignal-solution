/**
 * @sujet - Vous devez additionner le maximum et le minimum d'une séquence
 * @exemple - n = "6 4 8 31 7 5 9" | result -> 35
 * @feat - Math.min() | Math.max() | Number() | split() | map()
 */
function minMaxSeq() {
	const n = '6 4 8 31 7 5 9'.split(' ').map(e => Number(e));
	console.log(Math.min(...n) + Math.max(...n));
}

minMaxSeq();
