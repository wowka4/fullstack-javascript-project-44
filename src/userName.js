import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May i have your name? ');
console.log(`Hello, ${userName}`);

export default userName;
