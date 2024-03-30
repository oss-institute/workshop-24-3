module.exports = {
	root: true,
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@next/next/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	rules: {
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
	},
};
