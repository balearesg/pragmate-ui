export const component = `<Component template={template} />`;

export const template = `
[
	{
		label: 'Input radio',
		name: 'radio',
		events: {},
		options: [
			{ type: 'radioItem', label: 'Male', value: '2' },
			{ type: 'radioItem', label: 'Woman', value: '1' },
		],
		placeholder: 'radio',
		className: 'input-control',
		data: null,
		type: 'radio',
	},

	{
		label: 'Input checkbox',
		name: 'checkbox',
		events: {},
		options: [
			{ type: 'checkItem', label: 'Argentina', value: '2' },
			{ type: 'checkItem', label: 'Brasil', value: '1' },
		],
		placeholder: 'checkbox',
		className: 'input-control',
		data: null,
		type: 'checkbox',
	},

	{
		label: 'Input text',
		name: 'text',
		events: {},
		options: '',
		placeholder: 'text',
		className: 'input-control',
		data: null,
		type: 'text',
	},
	{
		label: 'Input email',
		name: 'email',
		events: {},
		placeholder: 'email',
		className: 'input-control',
		data: null,
		type: 'email',
	},
	{
		label: 'Input number',
		name: 'number',
		events: {},
		placeholder: 'number',
		className: 'input-control',
		data: null,
		type: 'number',
	},
	{
		label: 'Input tel',
		name: 'tel',
		events: {},
		placeholder: 'tel',
		className: 'input-control',
		data: null,
		type: 'tel',
	},
	{
		label: 'Input password',
		name: 'password',
		events: {},
		placeholder: 'password',
		className: 'input-control',
		data: null,
		type: 'password',
	},
];`;
