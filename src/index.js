import readlineSync from 'readline-sync';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const getRandomNumber = (min, max) => Number((Math.random() * (max - min) + min).toFixed(0));

const getUserName = () => {
  console.log('May I have your name?');
  const name = readlineSync.question('Your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const isNumberEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = getUserName();
  let randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  let userAnswer;
  const iter = (counter, acc) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}`);
    }
    console.log(`Question: ${acc}`);
    userAnswer = readlineSync.question('Your answer: ');
    const evenNumber = acc % 2 === 0;
    const oddNumber = acc % 2 !== 0;
    randomNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    if ((evenNumber && userAnswer === 'yes') || (oddNumber && userAnswer === 'no')) {
      console.log('Correct!');
      return iter(counter + 1, randomNumber);
    }
    const correctAnswer = evenNumber ? 'yes' : 'no';
    if (evenNumber && (userAnswer !== 'yes' || userAnswer !== 'no')) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    }
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
  };
  return iter(0, randomNumber);
};

export default isNumberEven;
