/**
 * @sujet - Observez l'exemple si dessous et implementez l'algorithme correspondant
 * @exemple
 * size = 5
 * *
 *  **
 *   ***
 *    ****
 *     *****
 * size = 3
 * *
 *  **
 *   ***
 * size = 1
 * *
 * @feat - push() | repeat() | forEach()
 */
function starsRepeat() {
	const size = 5;

	let result = [];
	let index = 1;
	let str = '';

	while (index <= size) {
		str += index === 1 ? '*' : ' '.repeat(index - 1) + '*'.repeat(index);
		result.push(str);
		str = '';
		index++;
	}

	result.forEach(r => {
		console.log(r);
	});
}

starsRepeat();
