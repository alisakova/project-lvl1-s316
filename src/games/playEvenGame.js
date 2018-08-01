import { cons } from 'hexlet-pairs';
import gameFlow from '../gameFlow';
import {
  getRandomNumber,
  MIN_NUMBER,
  MAX_NUMBER,
} from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const playEvenGame = () => {
  const question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameFlow(description, playEvenGame);
