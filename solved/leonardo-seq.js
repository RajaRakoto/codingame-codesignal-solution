/**
 * @subject -  Les nombres de Leonardo sont une suite de nombres donnée par la récurrence L(0) = 1 L(1) = 1 L(n) = L(n-1) + L(n-2) + 1 si n > 1 Étant donné un nombre n, trouvez le n-ième nombre Leonardo.
 * @exemple - n = 9 | result ->  1, 1, 3, 5, 9, 15, 25, 41, 67, 109
 */
function leonardoSeq() {
	const n = 9;
	const leo = n => {
		if (n <= 1) {
			return 1;
		} else {
			return leo(n - 1) + leo(n - 2) + 1;
		}
	};
	console.log(leo(n));
}

leonardoSeq();
