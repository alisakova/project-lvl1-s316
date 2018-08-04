import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 1000;
const description = 'Balance the given number.';

const getSortArr = (num1, num2) => num1 - num2;

const isDiffMoreOne = array => (Math.max(...array) - Math.min(...array)) > 1;

const getNewArray = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  array.splice(array.indexOf(min), 1, array[array.indexOf(min)] + 1);
  array.splice(array.indexOf(max), 1, array[array.indexOf(max)] - 1);
  return array;
};

const getBalance = (num) => {
  const stringNum = String(num);
  let newArray = stringNum.split('').map(Number);
  while (isDiffMoreOne(newArray)) {
    newArray = getNewArray(newArray);
  }
  return newArray.sort(getSortArr).join('');
};

const makeBalance = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = getBalance(question);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, makeBalance);
