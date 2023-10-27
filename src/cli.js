/* eslint-disable no-console */
import readlineSync from 'readline-sync';

// eslint-disable-next-line no-console
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}`);
};

export default greeting;
