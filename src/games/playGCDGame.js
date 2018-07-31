import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getUserName,
  sayWelcome,
  writeCongratulations,
  writeLoss,
  MIN_NUMBER,
  MAX_NUMBER,
  getGCD,
} from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const playGCDGame = () => {
  sayWelcome(description);
  const userName = getUserName();
  const a = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const b = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  let userAnswer;
  const iter = (counter, num1, num2) => {
    if (counter === 3) {
      return writeCongratulations(userName);
    }
    const result = getGCD(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
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

export default playGCDGame;
