const readline=require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a number: ', (num) => {
    let sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i;
    }
    console.log('sum of first n natural numbers is:'+sum);
    rl.close();
})
