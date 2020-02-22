'use strict';
$('#register').on('click', () => {
	alert(`注册成功，您的id为：GL${$('#username').val()}`);
	fetch('index.html').then(() => {
		location.href = 'index.html';
	}).catch((e) => {
		console.log(e);
	});
});