import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getOperationMark,
  getUserName,
  sayWelcome,
  writeCongratulations,
  writeLoss,
  MIN_NUMBER,
  MAX_NUMBER,
} from '../utils';

export const isNumberEven = () => {
  sayWelcome();
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = getUserName();
  let randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  let userAnswer;
  const iter = (counter, acc) => {
    if (counter === 3) {
      return writeCongratulations(userName);
    }
    console.log(`Question: ${acc}`);
    userAnswer = readlineSync.question('Your answer: ');
    const evenNumber = acc % 2 === 0;
    const oddNumber = acc % 2 !== 0;
    randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    if ((oddNumber && userAnswer === 'no') || (evenNumber && userAnswer === 'yes')) {
      console.log('Correct!');
      return iter(counter + 1, randomNumber);
    }
    const correctAnswer = evenNumber ? 'yes' : 'no';
    return writeLoss(correctAnswer, userAnswer, userName);
  };
  return iter(0, randomNumber);
};

const makeCalculating = () => {
  sayWelcome();
  console.log('What is the result of the expression?');
  const userName = getUserName();
  const a = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const b = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  let userAnswer;
  const iter = (counter, num1, num2) => {
    if (counter === 3) {
      return writeCongratulations(userName);
    }
    const result = getOperationMark(num1, num2);
    userAnswer = readlineSync.question('Your answer: ');
    const newNum1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const newNum2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    if (result.toString() === userAnswer) {
      console.log('Correct!');
      return iter(counter + 1, newNum1, newNum2);
    }
    return writeLoss(result, userAnswer, userName);
  };
  return iter(0, a, b);
};

export default makeCalculating;
