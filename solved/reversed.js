/**
 * @subject - Votre programme prend un nombre relatif n puis calcul la difference entre ce nombre est son inverse
 * @exemple - n = 2 | result -> 2-2 | n = 457 | result -> 457-754 | n = -98 | result -> -98-(-89)
 * @feat - Math.abs() | push() | slice() | join() | eval()
 */
function reversed() {
	let n = 2;
	let negFlag = false;

	if (n < 0) {
		n = Math.abs(n);
		negFlag = true;
	}

	const nToArray = [...String(n)];
	let inverse = [];
	let index = nToArray.length;

	if (nToArray.length != 1) {
		while (index >= 0) {
			inverse.push(nToArray[index]);
			index--;
		}
		inverse = Number(inverse.slice(1, inverse.length).join(""));
	} else {
		inverse = n;
	}

	const expression = `${negFlag ? "-" : ""}${n} -(${
		negFlag ? "-" : ""
	}${inverse})`;

	console.log(`${expression} = ${eval(expression)}`);
}

reversed();
