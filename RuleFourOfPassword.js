const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter your password with menimum lenth of 8 characters ', password =>{
    let regex = /^[A-Z][a-zA-Z]{8,}[$&^!@#()|,;:<>?/%-+][0-9]{1,}/
    let verify = regex.test(password);

    if(verify == true){
        console.log("Password is : "+password);
    }
    else{
        console.log("!! Error !! \n Please follow the rules of correct password");
    }
    readline.close();
})