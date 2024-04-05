/**
 * @subject - Etant donnE une chaine d'entrEe n, convertissez chaque caractere de la chaine en hexadecimal et trouvez la somme de chaque caractere hexadecimal. c
 * @exemple - n = "ABCDEF" | result -> 10 + 11 + 12 + 13 + 14 + 15 = 75
 * @feat - map() | reduce() | Number()
 */
function hexSum() {
	const n = "ABCDEF";

	// method 1
	console.log(
		[...n]
			.map((n) =>
				n == "A"
					? 10
					: n == "B"
						? 11
						: n == "C"
							? 12
							: n == "D"
								? 13
								: n == "E"
									? 14
									: n == "F"
										? 15
										: Number(n),
			)
			.reduce((total, n) => n + total),
	);

	// method 2
	// tips: conversion hex -> dec | +('0x'+ n) avec n la valeur en hexadecimal
	console.log([...n].reduce((total, n) => +("0x" + n) + total, 0));
}

hexSum();
