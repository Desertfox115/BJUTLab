const setContent = (url) => {
    fetch(url).then(() => {
        $('#contentFrame').attr('src', url);
    }).catch((e) => {
        alert(JSON.stringify(e));
    });
};

const contents = [
    'homepage',
    'inform',
    'pre-order',
    'me'
];

const switchContent = (content) => {
    for (let c of contents) {
        $('#' + c).parent().removeClass('active');
    }
    $('#' + content).parent().addClass('active');
    setContent(content + '.html');
};

$(document).ready(() => {
    switchContent('homepage');
    for (let c of contents) {
        $('#' + c).click(() => {
            switchContent(c);
        })
    }

});