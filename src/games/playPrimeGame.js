import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 1;
const maxNumber = 100;
const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeGame = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, playPrimeGame);
