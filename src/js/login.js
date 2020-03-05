'use strict';
import {serverLink} from './server';

$('#login').on('click', () => {
    let loginFormData = new FormData();
    loginFormData.append('id', $('#school_id').val());
    loginFormData.append('password', $('#password').val());
    loginFormData.append('type', $('#identitySelect').val());

    fetch(serverLink + 'login', {
        method: 'POST',
        body: loginFormData
    }).then((res) => {
        if (res.ok) {
            window.location.href = 'index.html';
        }
    }).catch((e) => {
        console.log(e);
    });
});