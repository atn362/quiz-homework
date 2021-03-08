//Establishes the variables
var score = 0;
var total = 5;
var point = 1;
var highest = total * point; 

//sends alert to read carefully
alert("Read Some Questions Carefully");

//stores the correct answers in the sessionStorage
function init(){
    sessionStorage.setItem('a1', 'b');
    sessionStorage.setItem('a2', 'a');
    sessionStorage.setItem('a3', 'd');
    sessionStorage.setItem('a4', 'a');
    sessionStorage.setItem('a5', 'c');

}
//runs the function 
init();

//runs the ready function while hiding the question form and restart button
$(document).ready(function(){
    $('.questionForm').hide();
    $('.button').hide();

//makes the first question visible 
    $('#q1').show();

//allows for the first question to be answered followed by the remaining questions
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

//begins the process function and evaluates the answer provided by the user and checks it against 
//the stored values of the correct answers
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
//loads the events which process the functions of the quiz
window.addEventListener('load', init, false);
}

//this function allows for the timer to be set at 1 minute and counts down in seconds
//
(function() {
    var sec = 60;
    function startTimer(){
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!");
                location.reload()
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 5;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.text(minutes + ":" + seconds);
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
    
// }

// jQuery(function ($) {
//     var oneMinute = 60 * 1.0;
//         display = $('#time');
//     startTimer(oneMinute, display);
// });