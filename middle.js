/**
 * @sujet - Le but est d'imprimer l'élément du milieu à partir d'un tableau de chaînes. Si la longueur du tableau est un nombre pair, vous devez imprimer la concaténation des deux éléments les plus centraux. Par exemple, pour le tableau I, LOVE, YOU, vous devez générer la chaîne LOVE. Pour le tableau 1, 4, potato, 6, vous devez sortir la chaîne 4potato.
 * @exemple - str = "I hate to Love you here" | result -> toLove
 */
function middle() {
  const str = "I hate to Love you here".split(" ");
  const slice = str.length/2;
  console.log((str.length % 2 == 0) ? str[(slice)-1] + str[slice] : str[Math.floor(slice)]);
}

middle();