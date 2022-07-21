/**
 * @sujet - Vous travaillez sur un projet de trader autonome et votre première tâche consiste à collecter des données historiques sur le taux de change de nombreux couples de devises.exchangeRates : un tableau d'entiers représentant le taux de change entre deux devises des derniers exchangeRates.length jours.
 * @exemple - Pour exchangeRates = [10, 11, 15, 13, 17, 21, 18, 13, 12], la réponse doit être ["#", "+1", "+4", "-2", "+4 ", "+4", "-3", "-5", "-1"]
 * @feat - isNaN() | push() | forEach()
 * @link - https://app.codesignal.com/challenge/QPT35gR7QJ3hBGxKq
 */
function traderHistory(exchangeRates) {
  let result = ["#"];
  exchangeRates.forEach((d,i) => {
  let diff = exchangeRates[i+1]-exchangeRates[i];
  if (!isNaN(exchangeRates[i+1])) result.push(`${diff>=0?'+'+diff:diff}`);
  }) 
  console.log(result);
}

traderHistory();