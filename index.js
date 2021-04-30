var readlineSync = require("readline-sync");
var chalk = require("chalk");


initialScore = 0;

console.log(chalk.bold.bgGreen("Welcome to  Quizz \n"))

console.log(chalk.white.bold("quiz rules :"))
console.log(chalk.blue.bold("1.All the questions are compulsary"));
console.log(chalk.blue.bold("2.Each question carries 4 marks"));
console.log(chalk.blue.bold("3.Wrong question will takeaway 1 mark \n\n"))

function getUser() {
  var userName = readlineSync.question("May i know ur name? ");
  console.log("Welcome " , chalk.greenBright(userName) ,("\nTo HOW WELL YOU KNOW RUDRA Quizz \n\n"));
}

let quiz = [{
  question : "which food i like most? ",
  a : "[a] Dosa",
  b : "[b] Idli",
  correctAnswer : "b",
},{
  question : "Which cricketer i like most? ",
  a : "[a] Virat kohli",
  b : "[b] MS dhoni",
  correctAnswer : "a",
},{
  question : "Which thing i like to do ",
  a : "[a] Travelling",
  b : "[b] Reading novel",
  correctAnswer: "a",
},{
  question : "Which movie do i like? ",
  a : "[a] Bahubali",
  b : "[b] 3 Idiots",
  correctAnswer : "b",
}
]


function playQuiz() {
  for (var i = 0; i<quiz.length; i++){
    var questions = quiz[i].question;
    var optionOne = quiz[i].a;
    var optionTwo = quiz[i].b;
    console.log(chalk.bold.red(questions));
    console.log(optionOne);
    console.log(optionTwo, "\n");
    var answer = readlineSync.question("what is ur answer? ")
    if ( answer == quiz[i].correctAnswer ) {
      initialScore = initialScore + 4;
      console.log(chalk.greenBright("Your are right!"))
      console.log(chalk.greenBright("current SCORE : " ,initialScore))
    }
    else {
      initialScore = initialScore -1;
      console.log(chalk.red("Your Wrong!"))
      console.log(chalk.red("current SCORE : ", initialScore));
      
    }
    console.log("------------------ \n")
  }
  
  console.log("Your total SCORE : ", chalk.greenBright(initialScore))
  console.log("Thank you!");
}

function confirmPlaying() {
  if (readlineSync.keyInYN("Are u ready to play ")){
    console.log("\n")
    getUser();
    playQuiz();
  }
  else {
    console.log("babye")
  }
}

confirmPlaying();