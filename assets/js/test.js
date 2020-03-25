function submit() {
    var isComplete = true;
    var answers = [];
    var points = 0;

    for (var i = 0; i < 10; i++) {
        var answer = "answer-" + (i + 1);
        if (document.getElementById(answer).value != null) {
            answers[i] = document.getElementById(answer).value;
        } else {
            answers[i] = "";
        }
    }

    if (answers[0] == "2") { points++; $('#answer-1').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-1').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[1] == "Ala") { points++; $('#answer-2').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-2').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[2] == "System.out.print(A[i][j]);") { points++; $('#answer-3').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-3').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[3] == "default") { points++; $('#answer-4').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-4').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[4] == "char") { points++; $('#answer-5').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-5').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[5] == "Dog dog1 = new Dog();") { points++; $('#answer-6').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-6').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[6] == "double") { points++; $('#answer-7').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-7').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[7] == "close()") { points++; $('#answer-8').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-8').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[8] == "Scanner") { points++; $('#answer-9').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-9').css('border-bottom', 'solid 1px #FF1E56'); }
    if (answers[9] == "true") { points++; $('#answer-10').css('border-bottom', 'solid 1px #fff'); } else { $('#answer-10').css('border-bottom', 'solid 1px #FF1E56'); }

    document.getElementById('result').innerHTML = "Wynik: " + points + "/10";
}