const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter your phone number with country code ', phoneNumber =>{
    // let regex = /^[\+][0-9]{3}-[0-9]{10}/
    let regex = /^[\+][0-9]{3}-[0-9]{10}/

    let verify = regex.test(phoneNumber);

    if(verify == true){
        console.log("Phone number is : "+phoneNumber);
    }
    else{
        console.log("!! Error !! \n Please enter correct phone number");
    }
    readline.close();
})