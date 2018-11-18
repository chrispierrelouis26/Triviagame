console.log("hey there");

$(document).ready(function(){

  
// create variables for correct/wrong answers

var time = 100;
var correctAnswers = 0;
var wrongAnswers = 0;
var totalAnswers = 0;


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

  // start();

  //  function timeConverter(t) {

  //   var minutes = Math.floor(t / 60);
  //   var seconds = t - (minutes * 60);

  //   if (seconds < 10) {
  //     seconds = "0" + seconds;
  //   }

  //   if (minutes === 0) {
  //     minutes = "00";
  //   }
  //   else if (minutes < 10) {
  //     minutes = "0" + minutes;
  //   }
  //   else if ( seconds < 0 && minutes !=0){
  //     minutes -=1;
  //     seconds=59;
  //   }

  //   return minutes + ":" + seconds;
  // }

  // function stop() {
  //   clearInterval(intervalId);
  //   count = false;
    
  // }

  

    $("#submit").on("click" , function(){
      event.preventDefault();
      console.log("good morning!");

      // function for when correct answer/wrong answer is chosen
      //first question
      $.each($("input[name='q-0']:checked"),function(){
        console.log($(this).val());
        
        if($(this).val()===questions.Q1.Answer){
      
          correctAnswers ++;
        
        }
         
        else {
          alert("incorrect answer");
          wrongAnswers ++;
        
        }
        

      })
      // second question
      $.each($("input[name='q-1']:checked"),function(){
        console.log($(this).val());

        if($(this).val()===questions.Q4.Answer){
       

          
        }
         
        else {
          wrongAnswers ++;
          alert(wrongAnswers);
        }
        

      })

      // third question
      $.each($("input[name='q-2']:checked"),function(){
        console.log($(this).val());

        if($(this).val()===questions.Q2.Answer){
          correctAnswers ++;
        }
         
        else {
          wrongAnswers ++;
        }
        

      })

      //fourth question
      $.each($("input[name='q-3']:checked"),function(){
        console.log($(this).val());

        if($(this).val()===questions.Q5.Answer){
          correctAnswers ++; 
        }
         
        else {
          wrongAnswers ++;
    
        }

      })

      if (correctAnswers > wrongAnswers){
        totalAnswers++;
        alert(totalAnswers);
      }
      else{
        console.log("nothing");
      }
  });




  
  // $("#button1").on("click" ,function(){
  //   alert("you pressed me!");
  // });
  
  
  // $("#button3").on("click" ,function(){
  //   alert("Thats correct!");
  // });
  
  // $(".q-0").on("click", function(){
  //   console.log($(this).text());
  // });
// Array of questions


var questions = {
  Q1: {
   Question:"Who is the President of the United States?" ,
    Options:["Donald Trump" , "Barack Obama" , "Ronald Raegan", "Abraham Lincoln"],
    Answer:"Donald Trump"
  },

  Q2: {
  Question2: "What is my last name?"  ,
  Options: ["christopher", "Smith", "Doe", "Adams"],
  Answer: "christopher"
 },

Q3: {
  Question3: "What is my name?" ,
 Options: ["Chris", "Mark" , " Alex" ,"Josh"],
 Answer: "Chris"
},

Q4:{
  Question4: "What is the largest ocean in the world?" ,
  Options: [ "Pacific","Atlantic" , "Arctic", "Oceanic"],
  Answer : "Atlantic"
},

Q5:{
  Question5: "What is the capital of new mexico?" ,
  Options: [ "Charlotte","Albany" , "Sante Fe"],
  Answer : "Sante Fe"
}

};





console.log(questions);
console.log(questions.Q1.Question);

for (i = 0; i < questions.length; i++) { 
  
}

 $("#donald").on("click" , function(){
   console.log("horray!");
   correctAnswers++;

 })
});



  $("#button").on("click", function(event){
    e.preventDefault();
    // look in the console for the answers
    for(var i = 0; i < 4; i++) {
      var selectedAnswer = $("q-0"+i).val();
      console.log("The selected answer for q-0"+ i+": " + selectedAnswer);
    }

    $("#button").on("click", function(event){
      e.preventDefault();
      // look in the console for the answers
      for(var i = 0; i < 4; i++) {
        var selectedAnswer = $("q-1"+i).val();
        console.log("The selected answer for q-0"+ i+": " + selectedAnswer);
      }
    });
  });


