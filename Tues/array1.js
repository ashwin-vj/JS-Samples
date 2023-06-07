var countries = ["India", "Australia", "England", "South Africa"];

var states = ["Kerala", "TamilNadu", "Punjab", "Kolkata", 33, 03];

console.log(states[1]);          // op: TamilNadu

console.log(states.length);      // op: (4) -----prints the array value of the states


countries[3] = "USA";   // this code replaces the given array
console.log(countries);      // op:  [ 'India', 'Australia', 'England', 'USA' ]  


states.pop();           // removes last element in array
console.log(states);         // op: [ 'Kerala', 'TamilNadu', 'Punjab' ] 


states.unshift("Ashwin");  //Inserts new elements at the start of an array.
console.log(states);            // op: [ 'Ashwin', 'Kerala', 'TamilNadu', 'Punjab' ]


states.shift();  //Removes the first element from an array and returns it.
console.log(states);     // op: [ 'Ashwin', 'Kerala', 'TamilNadu', 'Punjab' ]
  

console.log(states); 
console.log(states.indexOf(33));   //used to search the given value in array and display the index value.  


console.log(Array.from("Ashwin")); //  op:  [ 'A', 's', 'h', 'w', 'i', 'n' ]