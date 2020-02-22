'use strict';
// 等效于 document.addEventListener('DOMContentLoaded',function (){ });
import {setActivePage} from './header_script';

$(() => {
	setActivePage('preorder');
});