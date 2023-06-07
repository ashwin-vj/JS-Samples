
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);       // Output: [2, 4]

//  It filters the values or string we want to filter. here we have filtered even numbers.

//  syntax:array.filter(callback(element, index, array), thisArg);
