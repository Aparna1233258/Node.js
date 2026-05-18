const readline=require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a number: ', (num) => {
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log('Factorial of '+num+'is:'+fact);
    rl.close();
})
