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

	ConvertBase.bin2hex = function (num) {
		return ConvertBase(num).from(2).to(16);
	};

	ConvertBase.dec2bin = function (num) {
		return ConvertBase(num).from(10).to(2);
	};

	ConvertBase.dec2hex = function (num) {
		return ConvertBase(num).from(10).to(16);
	};

	ConvertBase.hex2bin = function (num) {
		return ConvertBase(num).from(16).to(2);
	};

	ConvertBase.hex2dec = function (num) {
		return ConvertBase(num).from(16).to(10);
	};

	this.ConvertBase = ConvertBase;
})(this);

console.log(ConvertBase.bin2dec('111')); // 7
console.log(ConvertBase.dec2hex('42')); // 2a
console.log(ConvertBase.hex2bin('f8')); // 11111000
console.log(ConvertBase.dec2bin('22')); // 10110
