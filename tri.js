const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the base of the triangle: ',(base)=>{
    rl.question('Enter the height of the triangle:',(height)=>{
        const area=1/2*Number(base)*Number(height);
        console.log('Area of the triangle is:'+area);
        rl.close();
    })
})
