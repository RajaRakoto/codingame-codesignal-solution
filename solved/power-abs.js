/**
 * @subject - Étant donné n un entier, imprimez 2 à la puissance de la différence absolue entre le nombre de 0 et 1 dans la représentation binaire de n. Exemple n = 27 : la représentation binaire est 11011. le nombre de 0 est 1 et le nombre de 1 est 4, donc la sortie est 2^|1-4| = 8.
 * @exemple - n = 27 | result -> 8
 * @feat - toString() | match() | Math.abs()
 */
function powerAbs() {
	n = Number(readline()).toString(2);
	z = (n.match(/0/g) || []).length;
	o = n.length - z;
	print(2 ** Math.abs(z - o));
}

powerAbs();
