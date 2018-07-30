import readlineSync from 'readline-sync';

const sayHello = () => {
  const actual = readlineSync.question('Your answer: ');
  console.log(`Hello, ${actual}!`);
}

export default sayHello;
