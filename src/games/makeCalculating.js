import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 100;
const description = 'What is the result of the expression?';
const operationMarks = ['+', '-', '*'];

const getCalc = (mathOperator, num1, num2) => {
  let correctAnswer;
  switch (mathOperator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = 0;
  }
  return correctAnswer;
};

const makeCalculating = () => {
  const num1 = getRandomNumber(minNumber, maxNumber);
  const num2 = getRandomNumber(minNumber, maxNumber);
  const action = operationMarks[getRandomNumber(0, 2)];
  const question = `${num1} ${action} ${num2}`;
  const correctAnswer = String(getCalc(action, num1, num2));
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, makeCalculating);
