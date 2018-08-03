import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 1000;
const description = 'Balance the given number.';

const isDiffIsOne = array => Math.max(...array) - Math.min(...array) === 1;

const getSortArr = (array) => {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (max < array[i]) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return array;
};

const getNewArray = (array) => {
  if (isDiffIsOne(array)) {
    const newArray = getSortArr(array);
    return newArray.join('');
  }
  const newArray = array.concat();
  const min = Math.min(...array);
  const max = Math.max(...array);
  const indexOfMin = newArray.indexOf(min);
  const indexOfMax = newArray.indexOf(max);
  newArray[indexOfMin] += 1;
  newArray[indexOfMax] -= 1;
  return getNewArray(newArray);
};

const getBalance = (num) => {
  const stringNum = String(num);
  const newArray = stringNum.split('').map(Number);
  const replacedArr = getNewArray(newArray);
  return replacedArr;
};

const makeBalance = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = getBalance(question);
  console.log(correctAnswer);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, makeBalance);
