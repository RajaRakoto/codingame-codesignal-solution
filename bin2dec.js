/**
 * @sujet - Convertissez le nombre binaire separE par "!" en decimal sans "!"
 * @exemple -  abc = "000!000!000" | result -> 000 | abc = "011!010!001" | result -> 321
 * @feat - Array.from() | join() | split() | parseInt() | map()
 */
function bin2Dec() {
	// methode 1
	const abc = '011!010!001';

	(function () {
		var ConvertBase = function (num) {
			return {
				from: function (baseFrom) {
					return {
						to: function (baseTo) {
							return parseInt(num, baseFrom).toString(baseTo);
						},
					};
				},
			};
		};

		ConvertBase.bin2dec = function (num) {
			return ConvertBase(num).from(2).to(10);
		};
		this.ConvertBase = ConvertBase;
	})(this);

	const result = abc.split('!').map(e => ConvertBase.bin2dec(e));

	console.log(result.join``); // une autre maniere d'ecrire join("")

	// methode 2
	console.log(abc.split('!').map(e => parseInt(e, 2)).join``);
}

bin2Dec();
