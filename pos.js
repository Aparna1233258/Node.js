const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a number: ', (num) =>{
    if(num>0){
        console.log("The number is positive"); 
    }
     else if (num<0){
        console.log("The number is negative");
    }
    else{
        console.log("The number is zero");
    }
    rl.close();
});