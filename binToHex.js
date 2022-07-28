/**
 * @sujet - Vous devez convertir le binaire donné en hexadécimal.
 * @exemple - b = 0b1010 | result -> 0xa
 * @feat - Array.from() | forEach() | push() | join() | Number() | replaceAll()
 */
function binToHex() {
  const b = "0b1010";
	console.log('0x' + parseInt(b.slice(2), 2).toString(16));
}

binToHex();
