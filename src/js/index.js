'use strict';
import {setActivePage} from './header_script';

const hideAll = () => {
	for (let i = 1; i <= 3; i++) {
		$('#content' + i).hide();
		$('#btn-c' + i).removeClass('bg-light');
	}
};
const showContent = (index) => {
	$('#content' + index).show();
	$('#btn-c' + index).addClass('bg-light');

};

const showTab = (index) => {
	hideAll();
	showContent(index);
};

for (let i = 1; i <= 3; i++) {
	$('#btn' + i).on('click', () => {
		showTab(i);
	});
}

$(() => {
	setActivePage('index');
	showTab(1);
});