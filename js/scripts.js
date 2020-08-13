$(document).ready(function() {
  $(".btn").click(function() {
    $("#dating_quiz").show();
  });
  
  $("dating_quiz").submit(function(event) {
    const answer = parseInt($("secret_question").val());
   
   
    if(answer === 1) {
    $("#soulmate_1").show();
    } 
    else if (answer === 2) {
    $("#soulmate_2").show();
    } 
    else if (answer === 3) {
    $("#soulmate_3").show();
    }
    else if (answer === 4) {
    $("#soulmate_4").show();
    }
    else if (answer === 5) {
    $("#soulmate_5").show();
    }
    event.preventDefault();
  });
});

