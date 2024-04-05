/**
 * @subject - Vous devez trouver le plus grand diviseur commun de deux nombres.
 * @exemple - a = 12, b = 18 | result -> 6
 */
function pgcdRecursion() {
  const pgcd = (a, b) => {
    if (a == 0) {
      return b;
    } else {
      return pgcd(b%a, a);
    }
  } 
}

pgcdRecursion();