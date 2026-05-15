const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    const diff = Number(num1) - Number(num2);
    console.log('Difference is: ' + diff);
    rl.close();
  });
});
