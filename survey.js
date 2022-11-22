const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout
});

const answers = [];

rl.question("What's your name? Nicknames are also acceptable:) ", (answer) => {
  answers.push(answer)
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers.push(answer);
      rl.question("Which meal if you favourite (eg. dinner, brunch, etc.) ", (answer) => {
        answers.push(answer);
        rl.question("What's you favourite thing to eat for that meal? ", (answer) => {
          answers.push(answer);
          rl.question("Which sports is your absolute favourite? ", (answer) => {
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              answers.push(answer);
              rl.question("Enter your phone-number: ", (answer) => {
                answers.push(answer);
                console.log(`Generating ${answers[0]}'s profile`);
              setTimeout(() => {
                console.log(`${answers[0]} is an enjoyer of ${answers[1]} and while doing so listening to ${answers[2]}, a real multitasker if I do say so myself. Along with that, ${answers[0]} is a fan of ${answers[5]} while eating ${answers[4]} for ${answers[3]}. ${answers[0]}'s superpower is ${answers[6]}, so if you ever need help with that give 'em a call: ${answers[6]}`);
              }, 5000)
              rl.close();
              });
            });
          });
        });
      });
    });
  });
});

