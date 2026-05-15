const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the radius of the circle:',(radius)=>{
    const perimeter=2*3.14*Number(radius);
    console.log('Perimeter of the circle is:'+perimeter);
    rl.close();
})
