/**
 * @subject - Determinez quel style de nommage est la variable donnEe
 * @exemple - message = "variable_one" | result -> "snake_case" | message = "VariableTwo" | result -> "PascalCase" | message = "variableThree" | result -> "camelCase"
 * @feat - includes() | test()
 */
function namingStyle() {
	const message = 'variableThree';
	// verifier si le caractere en argument est en uppercase
	function isUpper(str) {
		return !/[a-z]/.test(str) && /[A-Z]/.test(str);
	}

	console.log(
		isUpper(message[0])
			? 'PascalCase'
			: message.includes('_')
			? 'snake_case'
			: 'camelCase',
	);
}

namingStyle();
