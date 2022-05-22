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
