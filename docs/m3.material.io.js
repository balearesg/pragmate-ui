/**
 * webscrapping of  https://m3.material.io/styles/color/the-color-system/tokens
 */

// get tones of palette

function setVariables(data, name) {
	return data.reduce((acc, item) => {
		color = item.title.split('-')[1].trim();
		level = item.innerText;
		return `${acc}--${name}-${level}: ${color};\n`;
		console.log(color);
	}, '\n');
}

customProperties = setVariables([...temp1.children], 'primary');

//temp1 = table colors
//dark colors
var a = [...temp1.children[1].children].reduce((acc, item) => {
	function separate(input) {
		const prefix = input.slice(0, -2);
		const lastTwoChars = input.slice(-2);
		return `${prefix}-${lastTwoChars}`;
	}
	console.log(item);
	label = item.children[1].innerText.replace('md.sys.color.', '');
	var value = item.children[5].innerText;

	return `${acc}--${label}: ${value};\n`;
}, '');

//light colors

[...temp1.children[1].children].reduce((acc, item) => {
	function separate(input) {
		const prefix = input.slice(0, -2);
		const lastTwoChars = input.slice(-2);
		return `${prefix}-${lastTwoChars}`;
	}
	console.log(item);
	label = item.children[1].innerText.replace('md.sys.color.', '');
	var value = item.children[4].innerText;

	return `${acc}--${label}: ${value};\n`;
}, '');

// get light scheme theme
variables = [...temp1.children[1].children].reduce((acc, item) => {
	function separate(input) {
		const regex = /^(.*?)(\d+)$/;

		const match = input.match(regex);
		if (!match) return input;
		return `${match[1]}-${match[2]}`;
	}

	label = item.children[1].innerText.replace('md.sys.color.', '');
	var textLabel = item.children[2].innerText;
	var value = separate(textLabel.replace('md.ref.palette.', ''));

	return `${acc}--${label}: var(--${value});\n`;
}, '');

// get dark scheme theme
variables = [...temp1.children[1].children].reduce((acc, item) => {
	function separate(input) {
		const regex = /^(.*?)(\d+)$/;

		const match = input.match(regex);
		if (!match) return input;
		return `${match[1]}-${match[2]}`;
	}

	label = item.children[1].innerText.replace('md.sys.color.', '');
	var textLabel = item.children[3].innerText;
	var value = separate(textLabel.replace('md.ref.palette.', ''));

	return `${acc}--${label}: var(--${value});\n`;
}, '');
