$(document).ready ( function () {
    if (document.location.pathname == '/java/section1/1/') {
        setCookie('section1', 'finished');
        if (getCookie('section2') != 'finished') {
            setCookie('section2', 'progress');
        }
    }
    if (document.location.pathname == '/java/section2/2/') {
        setCookie('section2', 'finished');
        if (getCookie('section3') != 'finished') {
            setCookie('section3', 'progress');
        }
    }
    if (document.location.pathname == '/java/section3/2/') {
        setCookie('section3', 'finished');
        if (getCookie('section4') != 'finished') {
            setCookie('section4', 'progress');
        }
    }
    if (document.location.pathname == '/java/section4/2/') {
        setCookie('section4', 'finished');
        if (getCookie('section5') != 'finished') {
            setCookie('section5', 'progress');
        }
    }
    if (document.location.pathname == '/java/section5/1/') {
        setCookie('section5', 'finished');
        if (getCookie('section6') != 'finished') {
            setCookie('section6', 'progress');
        }
    }
    if (document.location.pathname == '/java/section6/3/') {
        setCookie('section6', 'finished');
        if (getCookie('section7') != 'finished') {
            setCookie('section7', 'progress');
        }
    }
    if (document.location.pathname == '/java/section7/2/') {
        setCookie('section7', 'finished');
    }
});

function setProgress (current) {
    if (current > getCookie('progress')) {
        setCookie('progress', current);
    }
}

var links = [
    '/java/dashboard',
    '/java/section1/1/',
    '/java/section2/1/',
    '/java/section2/2/',
    '/java/section3/1/',
    '/java/section3/2/',
    '/java/section4/1/',
    '/java/section4/2/',
    '/java/section5/1/',
    '/java/section6/1/',
    '/java/section6/2/',
    '/java/section6/3/',
    '/java/section7/1/',
    '/java/section7/2/',
    '/java/dashboard'
];

function next (current) {
    document.location.href = links[current + 1];
}

function previous (current) {
    document.location.href = links[current - 1];
}