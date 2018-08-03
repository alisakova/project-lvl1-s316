import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 1000;
const description = 'Balance the given number.';

const isDiffIsOne = array => Math.max(...array) - Math.min(...array) === 1;

const getSortArr = (array) => {
  const sortArray = array;
  console.log(`${array} до сортировки`);
  for (let i = 1; i <= sortArray.length; i += 1) {
    if (sortArray[i - 1] > sortArray[i]) {
      const el = sortArray[i - 1];
      sortArray[i - 1] = sortArray[i];
      sortArray[i] = el;
    }
  }
  console.log(array);
  return sortArray;
};

const getNewArray = (array) => {
  if (isDiffIsOne(array)) {
    const newArray = getSortArr(array);
    return newArray.join('');
  }
  const newArray = array;
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
  const correctAnswer = getBalance(215);
  console.log(correctAnswer);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, makeBalance);
