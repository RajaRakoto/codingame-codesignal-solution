/**
 * @sujet - L'eau coule sur les marches, vous pouvez la regarder couler. Pour chaque marche, l'eau descend d'une marche de plus
 * @exemple - n = 9, water = "~"
 * output:
 ~
  ~
   ~
    ~
     ~
      ~
       ~
        ~
         ~
 * @feat - push() | repeat() | reverse() | forEach()
 */
function water() {
	const n = 10;
	const water = '~';

	let result = [];
	let counter = 0;
	let tmp = n;
	while (counter < n) {
		result.push(' '.repeat(tmp - 1) + water);
		counter++;
		tmp--;
	}

	result.reverse().forEach(r => {
		console.log(r);
	});
}

water();
