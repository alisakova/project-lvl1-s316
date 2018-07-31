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

const isNumberEven = () => {
  const welcomePhrase = 'Answer "yes" if number even otherwise answer "no"';
  sayWelcome(welcomePhrase);
  const userName = getUserName();
  let randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  let userAnswer;
  const iter = (counter, acc) => {
    if (counter === 3) {
      return writeCongratulations(userName);
    }
    console.log(`Question: ${acc}`);
    userAnswer = readlineSync.question('Your answer: ');
    const evenNumber = acc % 2 === 0;
    const oddNumber = acc % 2 !== 0;
    randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    if ((oddNumber && userAnswer === 'no') || (evenNumber && userAnswer === 'yes')) {
      console.log('Correct!');
      return iter(counter + 1, randomNumber);
    }
    const correctAnswer = evenNumber ? 'yes' : 'no';
    return writeLoss(correctAnswer, userAnswer, userName);
  };
  return iter(0, randomNumber);
};

export default isNumberEven;
