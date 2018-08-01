import readlineSync from 'readline-sync';
import { cdr, car } from 'hexlet-pairs';
import {
  getUserName,
  sayWelcome,
  writeCongratulations,
  writeLoss,
} from './utils';

const GAME_STEPS = 3;

const gameFlow = (gameRule, game) => {
  sayWelcome(gameRule);
  const userName = getUserName();
  const iter = (counter) => {
    if (counter === GAME_STEPS) {
      writeCongratulations(userName);
      return;
    }
    const gameContent = game();
    console.log(`Question: ${car(gameContent)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === cdr(gameContent)) {
      console.log('Correct!');
      iter(counter + 1);
    } else {
      writeLoss(cdr(gameContent), userAnswer, userName);
    }
  };
  iter(0);
};

export default gameFlow;
