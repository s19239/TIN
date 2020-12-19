
//recursive function using function expression
const factorial = function (number) {
    if (number < 0){
        return -1;
     } else if (number == 0)
        return 1;
    else {
        return (number * factorial(number - 1));
    }
};
console.log(factorial(5));

//iterative function using function declaration
function factorialfun(number) {
    if (number == 0 || number == 1)
        return 1;
    for (i = number - 1; i >= 1; i--) {
        number*= i;
    }
    return number;
}
console.log(factorialfun(5));

