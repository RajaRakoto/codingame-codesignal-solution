/**
 * @sujet - Votre programme doit sortir une expression pour effectuer un developpement d'une autre expression donnEe et donner sa valeur a la fin
 * @exemple - input = (-a+b)(c+d) | result -> -a*c + -a*d + b*c + b*d
 * @feat - Array.from() | forEach() | join() | Number() | splice() | indexOf() | eval()
 */
function developOfDigit() {
	const input = '(-5+4)(-44x+7)';
	let { a, b, c, d } = [];

	// enleve le premier "(" et le dernier ")"
	let globalExpr = Array.from(input).slice(1, input.length - 1);
	let firstExpr = globalExpr.splice(0, globalExpr.indexOf(')'));
	let secondExpr = globalExpr.splice(2, globalExpr.length);

	// recupere l'index du signe de la constante b et d
	function getSignIndex(expr) {
		let index = expr.length;
		while (index > 0) {
			if (expr[index] === '-' || expr[index] === '+') {
				break;
			}
			index--;
		}
		return index;
	}

	a = String(firstExpr.splice(0, getSignIndex(firstExpr)).join(''));
	b = String(firstExpr.join(''));
	c = String(secondExpr.splice(0, getSignIndex(secondExpr)).join(''));
	d = String(secondExpr.join(''));

	// tester si a,b,c et d contient une variable ou pas
	const toTest = [a, b, c, d];
	let testResult = true;
	toTest.forEach(t => {
		if (!Number(t)) {
			console.log(`"${t}" est inconnu !`);
			testResult = false;
		}
	});

	// expression core
	const exprDisplay = (first, second) => {
		return `(${first}*${second})`;
	};
	const finalExpr = `${input} = ${exprDisplay(a, c)} + ${exprDisplay(
		a,
		d,
	)} + ${exprDisplay(b, c)} + ${exprDisplay(b, d)}`;

	if (testResult) {
		let resultExpr = eval(a * c + a * d + b * c + b * d);
		console.log(`${finalExpr} = ${resultExpr}`);
	} else {
		console.log(`${finalExpr}`);
	}
}

developOfDigit();
