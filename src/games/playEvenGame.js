import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getUserName,
  sayWelcome,
  writeCongratulations,
  writeLoss,
  MIN_NUMBER,
  MAX_NUMBER,
  GAME_STEPS,
  isEven,
} from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const playEvenGame = () => {
  sayWelcome(description);
  const userName = getUserName();
  const iter = (counter) => {
    if (counter === GAME_STEPS) {
      writeCongratulations(userName);
      return;
    }
    const question = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      writeLoss(correctAnswer, userAnswer, userName);
    }
  };
  iter(0);
};

export default playEvenGame;
