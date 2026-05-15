const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a number: ', (num) =>{
    for(let i=1; i<=num; i++){
        console.log("*");
    }
    for(let j=1; j<=num;j++){
    console.log(j);
    rl.close();
});