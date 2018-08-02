import { cons, cdr, car } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 10;
const description = 'Balance the given number.';

const makeRandomArray = () => {
  const diff = getRandomNumber(minNumber, maxNumber);
  const firstElement = getRandomNumber(0, 5);
  const array = [firstElement];
  const iter = (counter, acc) => {
    if (counter === 10) {
      return acc;
    }
    acc.push(acc[counter - 1] + diff);
    return iter(counter + 1, acc);
  };
  return iter(1, array);
};

const makeMissingElement = () => {
  const array = makeRandomArray();
  const index = getRandomNumber(0, 10);
  const missingElement = String(array[index]);
  array.splice(index, 1, '..');
  return cons(array, missingElement);
};

const findMissing = () => {
  const result = makeMissingElement();
  const question = car(result);
  const correctAnswer = cdr(result);
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, findMissing);
