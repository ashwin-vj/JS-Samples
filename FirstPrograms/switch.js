

var user = "user";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete Tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;

    default:
        console.log("Trial User");
}

