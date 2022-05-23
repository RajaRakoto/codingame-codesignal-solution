/*
Le vaisseau Destiny est en danger : attiré vers le bas, il risque de s'écraser contre les montagnes d'une planète inconnue. Aidez Rick à détruire les montagnes... sauvez le Destiny ! Votre programme doit lire depuis l'entrée standard la hauteur des montagnes puis fournir sur la sortie standard l'indice de la montagne à détruire. Vous gagnez si vous détruisez la montagne la plus haute à chaque tour de descente du vaisseau 
*/

// method 1
while (true) {
	let highestMountain = 0;
	let indexOfhighestMountain = 0;

	for (let i = 0; i < 8; i++) {
		const mountainH = parseInt(readline());

		if (highestMountain < mountainH) {
			highestMountain = mountainH;
			indexOfhighestMountain = i;
		}
	}

	console.log(indexOfhighestMountain);
}

// method 2
while (true) {
	mountains = [];

	for (let i = 0; i < 8; i++) {
		mountains.push(parseInt(readline()));
	}

	console.log(mountains.indexOf(Math.max.apply(null, mountains)));
}
