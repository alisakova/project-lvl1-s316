import { cons, cdr, car } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 10;
const description = 'What number is missing in this progression?';

const generateProgression = () => {
  const diff = getRandomNumber(minNumber, maxNumber);
  const firstElement = getRandomNumber(0, 5);
  const array = [firstElement];
  const iter = (counter, acc) => {
    if (counter === 10) {
      return acc;
    }
    const newArray = acc.concat(acc[counter - 1] + diff);
    return iter(counter + 1, newArray);
  };
  return iter(1, array);
};

const replaceElement = () => {
  const array = generateProgression();
  const index = getRandomNumber(0, 9);
  const missingElement = String(array[index]);
  array[index] = '..';
  return cons(array, missingElement);
};

const findMissing = () => {
  const result = replaceElement();
  const question = car(result);
  const correctAnswer = cdr(result);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, findMissing);
