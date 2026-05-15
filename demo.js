const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter first number: ', (num1)=> {
    rl.question('Enter second number:', (num2)=>{
        const sum=Number(num1)+Number(num2);
        const diff=Number(num1)-Number(num2);
        const product=Number(num1)*Number(num2);
        const div=Number(num1)/Number(num2);
        console.log("Sum:",sum);
        console.log("Difference:",diff);
        console.log("Product:",product);
        console.log("Division:",div);
        rl.close();
})
})