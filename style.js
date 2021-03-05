var score = 0;
var total = 5;
var point = 1;
var highest = total * point; 

function init(){
    sessionStorage.setItem('a1', 'b');
    sessionStorage.setItem('a2', 'a');
    sessionStorage.setItem('a3', 'd');
    sessionStorage.setItem('a4', 'a');
    sessionStorage.setItem('a5', 'c');

}
alert("Read Some Questions Carefully");

$(document).ready(function(){
    $('.questionForm').hide();
    $('.button').hide();

    $('#q1').show();

    // $('.questionForm #submit').click(function(){
    //    current = $(this).parents('form:first').data('question');
    //    next = $(this).parents('form:first').data('question')+1;
    //    $('.questionForm').hide();
    //    $('#q'+next+'').fadeIn(750);
    //    process(''+current+'');
    //     return false;
    // });

    $('#q1 #submit').click(function(){
        $('.questionForm').hide();
        process('q1');
        $("#q2").fadeIn(750);
        return false;
});
        
    $('#q2 #submit').click(function(){
            $('.questionForm').hide();
            process('q2');
            $("#q3").fadeIn(750);
            return false;
});
    $('#q3 #submit').click(function(){
        $('.questionForm').hide();
        process('q3');
        $("#q4").fadeIn(750);
        return false;
});

    $('#q4 #submit').click(function(){
        $('.questionForm').hide();
        process('q4');
        $("#q5").fadeIn(750);
        return false;
});

    $('#q5 #submit').click(function(){
        $('.questionForm').hide();
        process('q5');
        $("#results").fadeIn(750);
        return false;
});

});


function process(q){
    if(q == "q1"){
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a1){
            score++;
        }
    }
    if(q == "q2"){
        var submitted = $('input[name=q2]:checked').val();
        if(submitted == sessionStorage.a2){
            score++;
        }
    }
    if(q == "q3"){
        var submitted = $('input[name=q3]:checked').val();
        if(submitted == sessionStorage.a3){
            score++;
        }
    }
    if(q == "q4"){
        var submitted = $('input[name=q4]:checked').val();
        if(submitted == sessionStorage.a4){
            score++;
        }
    }
    if(q == "q5"){
        var submitted = $('input[name=q5]:checked').val();
        if(submitted == sessionStorage.a5){
            score++;
        }
    if(q == "q5"){
        $('#results').html('<h3>Your Final Score Is: '+score+' out of 5</h3>'), $('.button').show(), $('.timer').hide(),
        alert('How did you do?');
    }
    return false;
}
window.addEventListener('load', init, false);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
}};
