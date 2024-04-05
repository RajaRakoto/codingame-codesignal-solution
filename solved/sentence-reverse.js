/**
 * @subject - Ecrire l'algorithme correspondant au exemple ci-dessous
 * @exemple 
 * m = "Chuck Norris"
 * output:
  C s
  h i
  u r
  c r
  k o
    N
  N 
  o k
  r c
  r u
  i h
  s C
 * @feat - split() | forEach() | reverse() | push()
 */
function sentenceReverse() {
	const m = "Chuck Norris".split("");
	let n = [];

	m.forEach((m) => {
		n.push(m);
	});

	n = n.reverse();

	m.forEach((m, i) => {
		console.log(m + " " + n[i]);
	});
}

sentenceReverse();
