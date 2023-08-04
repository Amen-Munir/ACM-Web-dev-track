//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(someNumber) {
    var count = 0;
    if (someNumber < 10)
        return 0;
    else {
        while(someNumber >= 10) {
            let newNumber = someNumber.toString().split('').map(Number);
            someNumber= newNumber.reduce((products, newNumber) => products * newNumber);
            count++;

        }
       
    
    }
    return count;
}

console.log(persistence(39));
console.log(persistence(999));
