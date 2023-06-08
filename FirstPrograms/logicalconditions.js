

var email = true;
var facebook = true;
var twitter = true;

//if(email||facebook||twitter) //any of the condition is true it is true..........if everything is given as false it is fasle  and goes to else condition

if (email && facebook && twitter) //if all the condition is true o/p will be successfull and also anyone is false it is false
{
    console.log("LoggedIn Successfully");
}
else {
    console.log("LoggingIn Failed");
}