/**
 * @sujet - Vous avez une classe de n etudiants, chaque eleve se voit attribuer un numero de 1 a n. Vous avez une entree t avec des chiffres entre 1 et n mais certains manquent. Le but est d'imprimer le numero de l'eleve en precisant que ce dernier est "is here" (present) ou "absent" (absent)
 * @exemple
 * n = 8
 * t = "7 8 5 2 1"
 * result:
  1 is here
  2 is here
  3 is absent
  4 is absent
  5 is here
  6 is absent
  7 is here
  8 is here
 * @feat - Array() | map() | forEach() | split() | includes() | toString()
 */
function students() {}
let n = 8;
let t = '7 8 5 2 1';
[...Array(n)]
	.map((_, i) => i + 1)
	.forEach(l => {
		console.log(
			t.split(' ').includes(l.toString()) ? l + ' is here' : l + ' is absent',
		);
	});

students();
