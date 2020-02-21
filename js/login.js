"use strict";
$('#login').click(() => {
    fetch('index.html').then(() => {
        location.href = 'index.html';
    }).catch((e) => {
        console.log(e);
    });
});