'use strict';

const contents = [
	'index',
	'inform',
	'preorder',
	'me'
];

export const setActivePage = (page) => {
	for (const content of contents) {
		$('#' + content).parent().removeClass('active');
	}
	$('#' + page).parent().addClass('active');
};