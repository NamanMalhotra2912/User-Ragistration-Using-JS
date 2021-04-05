const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter your password with menimum lenth of 8 ', password =>{
    let regex = /^[a-z.a-zA-Z0-9]{8,}/
    let verify = regex.test(password);

    if(verify == true){
        console.log("Password is : "+password);
    }
    else{
        console.log("!! Error !! \n Please follow the rules of correct password");
    }
    readline.close();
})