/**
 * @sujet - Étant donné n entiers dans une chaine a, inversez les chiffres de chaque entier. Ensuite, calculez la valeur absolue de chaque entier et affichez la plus grande valeur.
 * @exemple 
a = "21, -94" -> 49
a = "10 20 -30 40 50 -60" -> 6
 * @feat - split() | map() | Math.abs(e) | toString() | reverse() | join() | sort() | pop()
 */
 function maxAbs() {
  const a = "10 20 -30 40 50 -60".split` `.map(e=>Math.abs(e).toString().split``.reverse().join``);
  console.log(Math.max(...a));
}
maxAbs();