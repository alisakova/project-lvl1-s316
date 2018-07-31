import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getUserName,
  sayWelcome,
  writeCongratulations,
  writeLoss,
  MIN_NUMBER,
  MAX_NUMBER,
} from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const playEvenGame = () => {
  sayWelcome(description);
  const userName = getUserName();
  let question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const iter = (counter) => {
    if (counter === 3) {
      writeCongratulations(userName);
      return;
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    writeLoss(correctAnswer, userAnswer, userName);
  };
  return iter(0);
};

export default playEvenGame;
