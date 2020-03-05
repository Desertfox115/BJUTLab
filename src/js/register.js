'use strict';
import {serverLink} from './server';

$('#register').on('click', () => {
    const registerData = new FormData();
    registerData.append('school_id', $('#school_id').val());
    registerData.append('password', $('#password').val());
    registerData.append('type', $('#type').val());
    fetch(serverLink + 'register', {
        method: 'POST',
        body: registerData
    }).then(res => {
        if (res.ok) {
            fetch('index.html').then(() => {
                location.href = 'index.html';
            }).catch((e) => {
                console.log(e);
            });
        }
    });
});