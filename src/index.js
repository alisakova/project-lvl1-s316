import readlineSync from 'readline-sync';

const sayHello = () => {
  console.log('May I have your name?');
  const actual = readlineSync.question('Your name: ');
  console.log(`Hello, ${actual}!`);
};

export default sayHello;
