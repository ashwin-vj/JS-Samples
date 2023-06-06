
var name = "Ashwin";

console.log("Line number 4", name);

function sayName() {
    var name = "Mr A";   //if this line is NA it will take the name from above var name "Ashwin"
    console.log("LineNumber 8", name);
    sayNameTwo();

    function sayNameTwo() {
        var name = "Mr AV";  //if this line is NA it will take the name from above var name "Ashwin"
        console.log("LineNumber 13", name);
    }
}
sayName();