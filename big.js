const readline=require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    const  larger=Number(num1)>Number(num2)?num1:num2;
    console.log('The larger number is:'+larger);
    rl.close();
  })
  })
