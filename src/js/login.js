'use strict';
$('#login').on('click', () => {
	fetch('index.html').then(() => {
		location.href = 'index.html';
	}).catch((e) => {
		console.log(e);
	});
});