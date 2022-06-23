/**
 * sujet - Ecrire un programme capable d'afficher une ligne de texte en art ASCII dans un style qui vous est fourni en entrée.
 * exemple 
   text = "MANHATTAN"
   output:
   # #  #  ### # #  #  ### ###  #  ###
   ### # # # # # # # #  #   #  # # # #
   ### ### # # ### ###  #   #  ### # #
   # # # # # # # # # #  #   #  # # # #
   # # # # # # # # # #  #   #  # # # #
 * link - https://www.codingame.com/ide/puzzle/ascii-art
 */
function artAscii() {
	// input
	const L = parseInt(readline());
	const H = parseInt(readline());

	// get index
	const text = readline().toLowerCase();
	const alphabet = [...String.fromCharCode(...Array(123).keys()).slice(97)];
	const index = [...text]
		.map(t => alphabet.indexOf(t))
		.map(t => (t == -1 ? 26 : t));

	// get ascii
	let arr = [];
	for (let i = 0; i < H + 1; i++) {
		const ROW = readline();
		arr.push(ROW);
	}

	// extract ascii
	let temp = [];
	let model = [];
	let min = 0;
	let counter = 0;
	while (counter < 27) {
		for (let i = 0; i < H; i++) {
			temp.push(arr[i].slice(min, min + L));
		}
		model.push(temp);
		temp = [];
		counter++;
		min += 4;
	}

	let final = index.map(i => model[i]);
	let i = 0;
	let pre = '';
	let result = [];
	while (i < final[0].length) {
		final.forEach(f => {
			pre += f[i];
		});
		result.push(pre);
		pre = '';
		i++;
	}

	result.forEach(r => console.log(r));
}
