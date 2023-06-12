 let x = 10;
if (true) {
  let x = 20;
  console.log(x); // Output: 20 (inner scope)
}
console.log(x); // Output: 10 (outer scope)
