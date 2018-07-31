import readlineSync from 'readline-sync';

const sayHello = () => {
  console.log('May I have your name?');
  const actual = readlineSync.question('Your name: ');
  console.log(`Hello, ${actual}!`);
};

export const isNumberEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  // sayHello();
  console.log('May I have your name?');
  const userName = readlineSync.question('Your name: ');
  console.log(`Hello, ${userName}!`);
  let randomNumber = Math.floor(Math.random() * 100);
  let userAnswer;
  const iter = (counter, acc) => {
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}`);
    }
    console.log(`Question: ${acc}`);
    userAnswer = readlineSync.question('Your answer: ');
    const evenNumber = acc % 2 === 0;
    const oddNumber = acc % 2 !== 0;
    randomNumber = Math.floor(Math.random() * 100);
    if ((evenNumber && userAnswer === 'yes') || (oddNumber && userAnswer === 'no')) {
      console.log('Correct!');
      return iter(counter + 1, randomNumber);
    }
    const correctAnswer = userAnswer === 'yes' ? 'no' : 'yes';
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
  };
  return iter(0, randomNumber);
};

export default sayHello;
