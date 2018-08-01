import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import getRandomNumber from '../utils';

const minNumber = 0;
const maxNumber = 100;
const description = 'Answer "yes" if number even otherwise answer "no"';
const isEven = num => num % 2 === 0;

const playEvenGame = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, playEvenGame);
