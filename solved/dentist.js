/**
 * @subject - On vous donne un patient, chaque patient a un nombre unique de dents. Chaque dent est doit saine 1, porri 0 ou tirE -, retirez toutes les dents pourries que vous trouvez  
 * @exemple 
 * input:
 ----01---1----0
 ----0111-00---0
 * output:
 -----1---1-----
 -----111-------
 * @feat - replaceAll() | map() | forEach()
 */
function dentist() {
	let arr = ["----01---1----0", "----0111-00---0"];
	const result = arr.map((a) => a.replaceAll("0", "-"));
	result.forEach((r) => console.log(r));
}

dentist();
