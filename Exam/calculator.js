const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return "Not divisible by zero";
        }
        return a / b;
    }
}
const calc = new Calculator();
rl.question("Enter first number: ", function(num1) {
    rl.question("Enter second number: ", function(num2) {
        rl.question(
            "Choose operation (+, -, *, /): ",
            function(operation) {
                num1 = Number(num1);
                num2 = Number(num2);
                let result;
                switch (operation) {
                    case '+':
                        result = calc.add(num1, num2);
                        break;
                    case '-':
                        result = calc.subtract(num1, num2);
                        break;
                    case '*':
                        result = calc.multiply(num1, num2);
                        break;
                    case '/':
                        result = calc.divide(num1, num2);
                        break;
                    default:
                        result = "Invalid operation";
                }
                console.log("Result: " + result);
                rl.close();
            }
        );
    });
});
 