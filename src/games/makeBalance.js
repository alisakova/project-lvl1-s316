import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 1000;
const description = 'Balance the given number.';

const isDiffIsOne = array => Math.max(...array) - Math.min(...array) === 1;

// const getSortArr = (array) => {
//   let min = array[0];
//   console.log(`${array} до сортировки`);
//   for (let i = 1; i < array.length; i += 1) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   console.log(array);
//   return array;
// };

const getNewArray = (array) => {
  if (isDiffIsOne(array)) {
    // const newArray = getSortArr(array);
    return array.join('');
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
