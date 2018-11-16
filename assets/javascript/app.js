console.log("hey there");

$(document).ready(function(){


var time = 10;


 function start() {
      intervalId = setInterval(count, 1000); 
  }

   function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
   time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").text(converted);
  }

  start();

   function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    else if ( seconds < 0 && minutes !=0){
      minutes -=1;
      seconds=59;
    }

    return minutes + ":" + seconds;
  }

  function stop() {
    clearInterval(intervalId);
    count = false;
    
  }


    $("#button").on("click" , function(){
      console.log("good morning!");

   

  });


  $("#button1").on("click" ,function(){
    alert("you pressed me!");
  });
  
  
  $("#button3").on("click" ,function(){
    alert("Thats correct!");
  });
  
  $(".q-0").on("click", function(){
    console.log($(this).text());
  });
// Array of questions


var questions = {
  Q1: {
   Question:"Who is the President of the United States?" ,
    Options:["Donald Trump" , "Barak Obama" , "Ronald Raegan", "Abraham Lincoln"],
    Answer:"Donald Trump"
  },

  Q2: {
  Question2: "What is my last name?"  ,
  Options: ["Pierre", "Smith", "Doe", "Adams"],
  Answer: "Pierre"
 },

Q3: {
  Question3: "What is my name?" ,
 Options: ["Chris", "Mark" , " Alex" ,"Josh"],
 Answer: "Chris"
},

Q4:{
  Question4: "What is the largest ocean in the world?" ,
  Options: [ "Pacific","Atlantic" , "Arctic", "Oceanic"],
  Answer : "Pacific"
}

};
console.log(questions);

for (i = 0; i < questions.length; i++) { 
  $("#trivia").append(radio);
}


});



