import readlineSync from 'readline-sync';

export const MIN_NUMBER = 0;
export const MAX_NUMBER = 100;

export const getRandomNumber = (min, max) => Number((Math.random() * (max - min) + min).toFixed(0));

export const getUserName = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('Your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const writeCongratulations = name => console.log(`Congratulations, ${name}`);

export const writeLoss = (correctAnswer, userAnswer, name) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);

export const sayWelcome = description => console.log(`Welcome to the Brain Games!\n${description}`);

export const sayHello = () => {
  console.log('May I have your name?');
  const actual = readlineSync.question('Your name: ');
  console.log(`Hello, ${actual}!`);
};

export const getGCD = (a, b) => {
  if (a === 0) {
    return b;
  }
  return getGCD(b % a, a);
};

export const getCalc = (mathOperator, num1, num2) => {
  let correctAnswer;
  switch (mathOperator) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    default:
      correctAnswer = 0;
  }
  return correctAnswer;
};
