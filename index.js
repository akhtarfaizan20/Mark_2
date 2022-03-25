console.clear();
var readlineSync = require("readline-sync");
var chalk = require('chalk');
var score = 0;
// Pre quiz Outputs
console.log(chalk.white.bgRed.bold('Money Heist'));
var userName=readlineSync.question("Please Enter Your Name-> ");
console.log("Welcome "+chalk.blue.bold.underline(userName+'!')+" Are you a "+chalk.white.bgRed.bold("Money Heist")+" Fan?\nHere is a fun quiz about "+chalk.white.bgRed.bold("Money Heist!")+"\n==============================================");
console.log(chalk.cyan.bold.bgWhite("Marking Rules ->")+" For the correct answer you will get 1 mark and for the wrong answer 0.25 will be deduted from the total marks.\n==============================================\nIt will be an objective type quiz so you have to select an option from A,B,C and D.\n=============================================="); 
var highScore = {
  name : "Aman Raj",
  sc : "4.5"
}
function quiz(ques,A,B,C,D,ans){
  console.log(chalk.cyan.bold.bgWhite("Question:- ")+ques);
  console.log("a) "+A+"\nb) "+B);
  console.log("c) "+C+"\nd) "+D);
  var userAnswer = readlineSync.question("Enter your answer -> ");
  if(userAnswer.toUpperCase() === ans){
    console.log(chalk.green.bold.italic("Congratulations! You are right. You got 1 Mark."));
    score++;
  } else {
    console.log(chalk.red.bold("Oops! you are wrong,")+" Sorry but I have to deduct "+chalk.red.bold("0.25 marks."));
    score-=0.25;
  }
  console.log("==============================================");
}



// Array of questions 
var questions=[{
  ques : "How many seasons does Money Heist have?",
  A : "3",
  B : "4",
  C : "5",
  D : "6",
  ans : "C"
},
{
  ques : "What is the reel name of the Professor in the series? ",
  A : "Martín Berrote",
  B : "Andrés de Fonollosa",
  C : "Aníbal Cortés",
  D : "Sergio Marquina",
  ans : "D"
},
{
  ques : "How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain? ",
  A : "8",
  B : "9",
  C : "10",
  D : "11",
  ans : "A"
},
{
  ques : "How much currency does the gang print at the Royal Mint? ",
  A : "879 million euros",
  B : "926 million euros",
  C : "984 million euros",
  D : "777 million euros",
  ans : "C"
},
{
  ques : "How many members of the original team die (or are presumed dead) during the course of Money Heist ?",
  A : "3",
  B : "4",
  C : "none",
  D : "1",
  ans : "A"
},
{
  ques : "What is the name of Berlin’s girlfriend who comes to visit at the Monastery?",
  A : "Jessica",
  B : "Maniana",
  C : "Selena",
  D : "Tatiana",
  ans : "D"
},
{
  ques : "Who is the general director of the Royal Mint of Spain? ",
  A : "The professor",
  B : "Denver",
  C : "Arturo Roman",
  D : "Nairobi",
  ans : "C"
}
             ];
// loop for questions 
for(var i=0;i<questions.length;i++){
  //function call
quiz(questions[i].ques,questions[i].A,questions[i].B,questions[i].C,questions[i].D,questions[i].ans);
}

// After Quiz Ouputs
// showing the highest scorer.
console.log("==============================================\n "+chalk.bgWhite.black.bold("HIGHEST SCORER")+"\n Name ->\t"+highScore.name+"\nScore ->\t"+highScore.sc+"\n==============================================");
//showing the total score 
console.log(chalk.green.bold.italic.underline.bgWhite("Your Score is -> "+score));
//condition to check wheater the player has beaten the highscore or not. 
if(score>highScore.sc){
  console.log(chalk.red.bold("Congratulations! You have broke the record and you have acheived the Highest Score!\nSend me the screen shot so that I can update it ASAP."))
}

 