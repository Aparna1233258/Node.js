const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the length of the rectangle:',(length)=>{
    rl.question('Enter the height of the rectangle:',(height)=>{
        const area=Number(length)*Number(height);
        console.log('Area of the rectangle is:'+area);
        rl.close();
    })
})