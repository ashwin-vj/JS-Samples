/* 
var autheticated = true;  //normally if we declare true if condition statemnt is executed and false will be else statement

if (autheticated) {
    console.log("LoggedIn Successfully");
}
else {
    console.log("LoggingIn Failed");
}
 */

//The Above condition is given in Below as ternary operator

var autheticated = false;

autheticated ? console.log("LoggedIn Successfully") : console.log("LoggingIn Failed");
//condition first? then if : and then else part