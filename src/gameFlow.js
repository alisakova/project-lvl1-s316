import readlineSync from 'readline-sync';
import { cdr, car } from 'hexlet-pairs';

const gameSteps = 3;

const writeCongratulations = name => console.log(`Congratulations, ${name}`);

const writeLoss = (correctAnswer, userAnswer, name) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);

const sayWelcome = description => console.log(`Welcome to the Brain Games!\n${description}`);

const getUserName = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('Your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const gameFlow = (gameRule, game) => {
  sayWelcome(gameRule);
  const userName = getUserName();
  const iter = (counter) => {
    if (counter === gameSteps) {
      writeCongratulations(userName);
      return;
    }
    const gameContent = game();
    console.log(`Question: ${car(gameContent)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === cdr(gameContent)) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      writeLoss(cdr(gameContent), userAnswer, userName);
    }
  };
  iter(0);
};

export default gameFlow;
