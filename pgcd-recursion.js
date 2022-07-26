/* pgcd algo */
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