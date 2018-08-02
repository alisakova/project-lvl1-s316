import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 1000;
const description = 'Balance the given number.';

const getSortArr = (num1, num2) => num1 - num2;

const isDiffIsOne = array => (Math.max(...array) - Math.min(...array)) === 1;

const getNewArr = (array) => {
  if (isDiffIsOne(array)) {
    return array.sort(getSortArr).join('');
  }
  const min = Math.min(...array);
  const max = Math.max(...array);
  array.splice(array.indexOf(min), 1, array[array.indexOf(min)] + 1);
  array.splice(array.indexOf(max), 1, array[array.indexOf(max)] - 1);
  return getNewArr(array);
};

const getNewArray = (array) => {
  if (isDiffIsOne(array)) {
    return array.sort(getSortArr).join('');
  }
  const newArray = array;
  const min = Math.min(...array);
  const max = Math.max(...array);
  console.log(newArray);
  newArray[newArray.indexOf(min)] = min + 1;
  newArray[newArray.indexOf(max)] = max - 1;
  console.log(newArray);
  return newArray;
};

const getBalance = (num) => {
  const stringNum = String(num);
  const newArray = stringNum.split('').map(Number);
  const replacedArr = getNewArray(newArray);
  console.log(replacedArr);
  return replacedArr;
};

const makeBalance = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = getBalance(question);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, makeBalance);
