import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 1000;
const description = 'Balance the given number.';

const isDiffIsOne = array => Math.max(...array) - Math.min(...array) === 1;

const getNewArray = (array) => {
  const iter = (counter, acc) => {
    if (counter === array.length) {
      const resultArray = acc.split('').map(Number);
      return resultArray;
    }
    let newArray = acc;
    newArray += array[counter];
    return iter(counter + 1, newArray);
  };
  return iter(0, []);
};

const getSortArr = (array) => {
  const sortArray = getNewArray(array);
  for (let i = 1; i <= sortArray.length; i += 1) {
    if (sortArray[i - 1] > sortArray[i]) {
      const el = sortArray[i - 1];
      sortArray[i - 1] = sortArray[i];
      sortArray[i] = el;
      console.log(sortArray);
    }
  }
  return sortArray;
};

const getBalanceArray = (array) => {
  const newArray = getNewArray(array);
  const iter = (counter, acc) => {
    if (isDiffIsOne(acc)) {
      const balancedArray = getSortArr(acc);
      return balancedArray.join('');
    }
    const min = Math.min(...acc);
    const max = Math.max(...acc);
    const indexOfMin = acc.indexOf(min);
    const indexOfMax = acc.indexOf(max);
    acc[indexOfMin] += 1;
    acc[indexOfMax] -= 1;
    return iter(counter + 1, acc);
  };
  return iter(0, newArray);
};

const getBalance = (num) => {
  const stringNum = String(num);
  const newArray = stringNum.split('').map(Number);
  const replacedArr = getBalanceArray(newArray);
  return replacedArr;
};

const makeBalance = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = getBalance(question);
  console.log(correctAnswer);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, makeBalance);
