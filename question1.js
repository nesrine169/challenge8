function GetEvenNumbers(array) {
    
    const evenNumbers = array.filter(number => number % 2 == 0);
    return evenNumbers;
}

let numbers = [8,9,21,36,23,15];
let evenNumbers = GetEvenNumbers(numbers);
console.log(evenNumbers); 



  







