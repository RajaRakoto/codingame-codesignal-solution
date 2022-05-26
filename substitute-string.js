/* Une chaine contient 2 caracteres disctincts, votre programme doit imprimer l'inverse de ces caracteres | ex: "tyyytt" -> "ytttyy" | "/--/-/" ->  "-//-/-" */

const s = '988998';

let diff = [Array.from(s)[0]];
Array.from(s).forEach(s => {
	if (diff[0] != s) {
		diff.push(s);
	}
});

diff = diff.slice(0, 2);
const S = Array.from(s).map(s => (s === diff[0] ? diff[1] : diff[0]));

console.log('input: ' + s); // 988998
console.log('output: ' + S.join('')); // 899889
