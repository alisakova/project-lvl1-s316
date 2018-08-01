import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import {
  getRandomNumber,
  MIN_NUMBER,
  MAX_NUMBER,
  getGCD,
} from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const playGCDGame = () => {
  const num1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = getGCD(num1, num2);
  return cons(question, String(correctAnswer));
};

export default () => gameFlow(description, playGCDGame);
