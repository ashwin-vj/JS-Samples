

function getUserRole(name, role)
//var getUserRole=function (name, role)// we can also use this type of line telling that var = function name 
{

    switch (role){
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "sub-admin":
            return `${name} is sub-admin access to create and delete courses`;
            break;
        case "testprep":
                return `${name} is a test prep with access to create and delete tests. `;
                break;    
        case "user":
                return `${name} is a user to consume content`;
                break;

        default: 
            return `${name} is a trial user`;
            break;
    }
};

console.log(getUserRole("Ashwin","testprep"));

var getRole=getUserRole("Vijay","user");
console.log(getRole);