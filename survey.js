const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionList = [
  'What\'s your name? Nicknames are also acceptable :)  ', //0 name
  'What\'s an activity you like doing?  ', // 1 activity
  'What do you listen to while doing that?  ', // 2 music
  'Which meal is your favourite (eg: dinner, brunch, etc.)  ', // 3 meal
  'What\'s your favourite thing to eat for that meal?  ', // 4 food
  'Which sport is your absolute favourite?  '  , // 5 sport
  'What is your superpower? In a few words, tell us what you are amazing at!  ' // 6 weed
];

let counter = 0;
let answers = [];

const questionnaire = function(survey) {
  if (counter < survey.length) {
    rl.question(survey[counter], answer => {
      answers.push(answer);
      counter++;
      questionnaire(survey);
    });
  } else {
    console.log(`\n===========LIGHTHOUSE SECRET CREEPY STUDENT PROFILING===========\n${answers[0]} is a devoted music fan of ${answers[2]} while engaging in the wholesome activty of ${answers[1]} over doing Compass's countless activities...also enjoys a ${answers[3]} with ${answers[4]}, usually after practising the sport of ${answers[5]}, typical of a person who has a secret fetish of ${answers[6]}.\n========TOP SECRET | CLASSFIED | SELF-DESTRUCTS IN *BEEP*=======\n`);
    rl.close();
  }
}

questionnaire(questionList);