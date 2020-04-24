'use strict';
import {serverLink} from './server';
window.onload = function(){
    //页面初始化时，如果cookie存在则填充
    if (getCookie('username') && getCookie('password')) {
        document.getElementById('username').value = getCookie('username');
        document.getElementById('password').value = getCookie('password');
        document.getElementById('remember').checked = true;
    }
};

    //如果勾选状态发生改变，取消勾选时删除cookie
    document.getElementById('remember').onchange = function() {
        if (!this.checked) {
            delCookie('username');
            delCookie('password');
        }
    };
    //表单提交时，如果勾选则保存cookie
    document.getElementById('subLoginForm').onsubmit = function() {
        if (document.getElementById('remember').checked) {
            setCookie('username', oUser.value, 7);
            setCookie('password', oPswd.value, 7);
        }
    };


$('#login').on('click', () => {
    document.getElementById('subLoginForm').submit();
    let loginFormData = new FormData();
    loginFormData.append('id', $('#school_id').val());
    loginFormData.append('password', $('#password').val());
    loginFormData.append('type', $('#identitySelect').val());

    fetch(serverLink + 'login', {
        method: 'POST',
        body: loginFormData,
        credentials:'include'
    }).then((res) => {
        if (res.ok) {

            window.location.href = 'index.html';
        }
    }).catch((e) => {
        console.log(e);
    });
});


function setCookie(name, value, day) {
    let date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;
}
function getCookie(name) {
    let reg = RegExp(name + '=([^;]+)');
    let arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return '';
    }
}
function delCookie(name) {
    setCookie(name, null, -1);
}