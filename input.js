const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a number: ', (answer) => {
  console.log('The number is:', answer);
  rl.close();
});