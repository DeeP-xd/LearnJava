$(document).ready(function () {
    makecenter();
});

$(window).resize(function () {
    makecenter();
}).resize()

function makecenter () {
    centerdiv(".homepage-links");
    centerdiv(".login-containter");
    centerdiv(".register-containter");
    vcenterdiv(".dashboard-list-container");
}

function centerdiv (name) {
    var linkwidth = Math.floor($(name).width());
    var browserwidth = $(document).width();
    var margin = (browserwidth - linkwidth) / 2;
    console.log(margin);
    $(name).css("margin-left", margin);
}

function vcenterdiv (name) {
    var linkwidth = Math.floor($(name).height());
    var browserwidth = $(document).height();
    var margin;
    if ((browserwidth - linkwidth) > 0) {
        margin = (browserwidth - linkwidth) / 2;
    } else {
        margin = 0;
    }
    console.log(margin);
    $(name).css("margin-top", margin);
}

function submitRegister () {
    if (document.getElementById('passwd1').value == document.getElementById('passwd2').value) {
        document.getElementById('register-form').submit();
    } else {
        alert('Passwords do not match');
    }
}

var toastX = -150;
var _link;

function toast (title, text, link, button) {
    $('.toast-container').css("display", "block");
    $('#ttitle').html(title);
    $('#ttext').html(text);
    $('#tbutton').html(button);

    if (link != null) {
        $('.toast-button').css('display', 'block');
        console.log(link);
        _link = link;
    }

    setTimeout( function () {
        moveToast(0);
    }, 1);
}

// direction:
// 0 - move up
// 1 - move down

function moveToast (direction) {
    $('.toast-container').css('bottom', toastX + 'px');
    if (direction == 0) {
        if (toastX < 20) {
            toastX++;
            setTimeout( function () {
                moveToast(0);
            }, 1);
        }
    } else if (direction == 1) {
        if (toastX > -150) {
            toastX--;
            setTimeout( function () {
                moveToast(1);
            }, 1);
        } else {
            $('.toast-container').css("display", "none");
        }
    } else {
        console.log("Invalid parameter. You're dump.")
    }
}

function toastLink () {
    window.location.href = _link;
}

function closeToast () {
    moveToast(1);
}