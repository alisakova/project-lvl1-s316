import readlineSync from 'readline-sync';

export const MIN_NUMBER = 0;
export const MAX_NUMBER = 100;
const OPERATION_MARKS = ['+', '-', '*'];

export const getRandomNumber = (min, max) => Number((Math.random() * (max - min) + min).toFixed(0));

export const getOperationMark = (a, b) => {
  const mathOperator = getRandomNumber(0, OPERATION_MARKS.length + 1);
  if (OPERATION_MARKS[mathOperator] === '+') {
    console.log(`Question: ${a} + ${b}`);
    return a + b;
  }
  if (OPERATION_MARKS[mathOperator] === '-') {
    console.log(`Question: ${a} - ${b}`);
    return a - b;
  }
  console.log(`Question: ${a} * ${b}`);
  return a * b;
};

export const getUserName = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('Your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const writeCongratulations = name => console.log(`Congratulations, ${name}`);

export const writeLoss = (correctAnswer, userAnswer, name) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);

export const sayWelcome = () => console.log('Welcome to the Brain Games!');

export const sayHello = () => {
  console.log('May I have your name?');
  const actual = readlineSync.question('Your name: ');
  console.log(`Hello, ${actual}!`);
};
