'use strict';
// 等效于 document.addEventListener('DOMContentLoaded',function (){ });
import {setActivePage} from './header_script';

let ruleIndex = 0;
//假装这是从后端获取到的预约规则信息。
const generateFakeRules = (n) => {
    let rules = [];
    for (let i = 1; i <= n; i++) {
        rules.push({
            title: '规则' + i,
            url: 'preorder_rules.html'
        });
    }
    return rules;
};

const generateLinks = (rules) => {
    for (const rule of rules) {
        let linkId = 'ruleLink' + ruleIndex;
        $('#ruleList').append(`<li class="list-group-item rounded-top">
                    <a href="#ruleModal" id="${linkId}" data-toggle="modal" class="text-black-50">js生成：${rule.title}</a>
                </li>`);
        $('#' + linkId).on('click', () => {
            $('#ruleModalIFrame').src = rule.url;
        });
    }
};

$(() => {
    setActivePage('preorder');
    console.log('------');
    const rules = generateFakeRules(10);
    console.log(JSON.stringify(rules));
    generateLinks(rules);
});