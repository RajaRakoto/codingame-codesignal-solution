/**
 * @subject - Votre programme doit imprimer la valeur en binaire du droit allouE sur un fichier dans un systeme GNU/Linux
 * @exemple - input = -r---w---x | result -> 421 | input = -rwxr-xr-x | result -> 755
 * @feat - slice() | forEach() | push() | join() | Number()
 */
function binaryAccess() {
	const input = "-rwxr-xr-x";

	const inputArray = [input.slice(1, 4), input.slice(4, 7), input.slice(7, 11)];
	const binary = ["---", "--x", "-w-", "-wx", "r--", "r-x", "rw-", "rwx"];
	let result = [];

	inputArray.forEach((input) => {
		binary.forEach((bin, index) => {
			if (input === bin) {
				result.push(index);
			}
		});
	});

	console.log(Number(result.join("")));
}

binaryAccess();
