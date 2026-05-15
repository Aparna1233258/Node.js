const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the radius of the circle:',(radius)=>{
    const area=3.14*Number(radius)*Number(radius);
    console.log('Area of the circle is:'+area);
    rl.close();
})
