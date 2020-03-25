$(document).ready( function () {

    if (!checkCookie('name')) {
        setCookie('name', prompt('Podaj imię', ''));
        setCookie('progress', 0);
    }

    var name = getCookie('name');
    document.getElementById('dashboard-h1').innerHTML = ("Witaj, " + name + "!");

    if (getCookie("section1") == "") {
        setCookie("section1", "progress", 365);
    }

    var sectionName;
    for (var i = 1; i <= 7; i++) {
        sectionName = "section" + i;
        if (checkCookie(sectionName)) {
            if (getCookie(sectionName) == "finished") {
                document.getElementById("img-" + sectionName).style.display = "inline";
            } else if (getCookie(sectionName) == "progress") {
                console.log("progress");
            } else {
                $("#" + sectionName).addClass("item-disabled");
            }
        } else {
            $("#" + sectionName).addClass("item-disabled");
        }
    }
});

function sectionClick (num) {
    if (checkCookie("section" + num)) {
        if (getCookie("section" + num) == "progress" || getCookie("section" + num) == "finished") {
            window.location.href = "http://brandin.digital/java/section" + num;
        } else {
            toast("Nie tak szybko...", "Musisz ukończyć poprzednią część, aby uzyskać dostęp do kolejnych.");
        }
    } else {
        toast("Nie tak szybko...", "Musisz ukończyć poprzednią część, aby uzyskać dostęp do kolejnych.");
    }
} 

function test () {
    if (getCookie('progress') == 13) {
        document.location.href = '/java/test/';
    } else {
        toast('Ukończ kurs!', 'Aby przejść test, musisz ukończyć cały kurs');
    }
}

function logout () {
    setCookie('name', '');
    setCookie('progress', 0);
    setCookie('section1', '');
    setCookie('section2', '');
    setCookie('section3', '');
    setCookie('section4', '');
    setCookie('section5', '');
    setCookie('section6', '');
    setCookie('section7', '');
    window.location.href = '/java/';
}


// PROGRESS CIRCLE

if (!checkCookie('progress')) {
    setCookie('progress', 0, 365);
}

var i = 0, temp_perc, degs;
var perc = getCookie('progress') / 13 * 100;

if (perc == 50) {
    degs = 181;
} else if (perc > 100) {
    degs = 360;
} else {
    degs = perc / 100 * 360;
}

var activeBorder = $("#activeBorder");

setTimeout(function () {
    loopit();
}, 0.6);

function loopit() {
    i++;
    if (i < 0)
        i = 0;
    if (i > degs)
        i = degs;
    temp_perc = (100 * i) / 360;
    $(".progress-perc").html(Math.round(temp_perc) + "%");

    if (i <= 180) {
        activeBorder.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #707070 50%),linear-gradient(90deg, #707070 50%, transparent 50%)');
    }
    else {
        activeBorder.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, #FF1E56 50%),linear-gradient(90deg, #707070 50%, transparent 50%)');
    }

    setTimeout(function () {
        loopit();
    }, 0.6);

}