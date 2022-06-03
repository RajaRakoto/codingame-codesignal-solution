/**
 * @sujet -  Observez l'exemple ci dessous et ecrivez le code permettant de resoudre le probleme
 * @exemple - input -> ['adgjmpswz', 'behknqtx', 'cfiloruy'] | output -> 'abcdefghijklmnopqrstuwxyz'
 * @feat - push() | shift() | flat()
 */
function indexManip() {
	let word = ['adgjmpswz', 'behknqtx', 'cfiloruy'];

	const stock = [];
	let string = '';

	word.forEach(w => {
		stock.push([...w]);
	});

	while (stock.flat()[0]) {
		for (const w of stock) {
			string += w.shift() || '';
		}
	}

	console.log(string);
}

indexManip();
