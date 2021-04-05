const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter valid email address ', email =>{
    let regex = /^[a-z.a-zA-Z0-9]+@[a-zA-Z0-9]+(.[a-z])/
    let verify = regex.test(email);

    if(verify == true){
        console.log("Email address is : "+email);
    }
    else{
        console.log("!! Error !! \n Please follow the rules of correct email address");
    }
    readline.close();
})