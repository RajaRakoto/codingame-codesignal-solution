/**
 * @sujet -  Une chaine contient 2 caracteres disctincts, votre programme doit imprimer l'inverse de ces caracteres
 * @exemple -  s = "tyyytt" | result -> "ytttyy" | s = "/--/-/" | result ->  "-//-/-"
 * @feat - Array.from() | forEach() | push() | slice() | join() | map()
 */
function substitureString() {
	const string = '988998';

	let diff = [Array.from(string)[0]];
	Array.from(string).forEach(s => {
		if (diff[0] != s) {
			diff.push(s);
		}
	});

	diff = diff.slice(0, 2);
	const String = Array.from(string).map(s =>
		s === diff[0] ? diff[1] : diff[0],
	);

	console.log('input: ' + string); // 988998
	console.log('output: ' + String.join('')); // 899889
}

substitureString();
