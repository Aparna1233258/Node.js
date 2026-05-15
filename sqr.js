const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the side of the square:',(side)=>{
    const area=Number(side)*Number(side);
    console.log('Area of the square is:',+area);
    rl.close();
})