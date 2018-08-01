import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 100;
const description = 'Find the greatest common divisor of given numbers.';
const getGCD = (a, b) => {
  if (a === 0) {
    return b;
  }
  return getGCD(b % a, a);
};

const playGCDGame = () => {
  const num1 = getRandomNumber(minNumber, maxNumber);
  const num2 = getRandomNumber(minNumber, maxNumber);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = getGCD(num1, num2);
  return cons(question, String(correctAnswer));
};

export default () => gameFlow(description, playGCDGame);
