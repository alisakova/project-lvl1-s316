import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import {
  getRandomNumber,
  MIN_NUMBER,
  MAX_NUMBER,
  getCalc,
} from '../utils';

const description = 'What is the result of the expression?';
const OPERATION_MARKS = ['+', '-', '*'];

const makeCalculating = () => {
  const num1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const action = OPERATION_MARKS[getRandomNumber(0, 2)];
  const question = `${num1} ${action} ${num2}`;
  const correctAnswer = getCalc(action, num1, num2);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, makeCalculating);
