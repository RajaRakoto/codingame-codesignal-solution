/**
 * @sujet - Votre programme doit convertir l'heure exprimE en format HH:mm en minute seulement
 * @exemple - hours = "18:07" | result -> "1087 mn"
 * @feat - split() | Number()
 */
function minuteConverter() {
	const hours = '18:07';

	const result = Number(hours.split(':')[0]) * 60 + Number(hours.split(':')[1]);
	console.log(result + " mn");
}

minuteConverter();
