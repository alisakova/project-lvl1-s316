import { cons, cdr, car } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 10;
const arrayLength = 10;
const description = 'What number is missing in this progression?';

const generateProgression = (firstElement, step, length) => {
  const iter = (counter, acc) => {
    if (counter === length) {
      return acc;
    }
    const newArray = acc.concat(acc[counter - 1] + step);
    return iter(counter + 1, newArray);
  };
  return iter(1, [firstElement]);
};

const replaceElement = () => {
  const diff = getRandomNumber(minNumber, maxNumber);
  const firstElement = getRandomNumber(0, 5);
  const array = generateProgression(firstElement, diff, arrayLength);
  const index = getRandomNumber(0, 9);
  const replacedElement = String(array[index]);
  array[index] = '..';
  return cons(array, replacedElement);
};

const findMissing = () => {
  const result = replaceElement();
  const question = car(result);
  const correctAnswer = cdr(result);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, findMissing);
