const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter your last name', lastName =>{
    let regex = /^[A-Z][a-zA-Z]{2}/
    let verify = regex.test(lastName);

    if(verify == true){
        console.log("Last Name is : "+lastName);
    }
    else{
        console.log("!! Error !! \n Last name should contain first capital letter with menimum lenth of 3 characters");
    }
    readline.close();
})