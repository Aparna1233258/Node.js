const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    const temp=num1;
    num1=num2;
    num2=temp;
    console.log('After swapping:First number is '+num1+' and the second number is'+num2);
    rl.close();
})
})