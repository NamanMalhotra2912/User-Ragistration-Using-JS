const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter your first name', name =>{
    let regex = /^[A-Z][a-zA-Z]{2}/
    let verify = regex.test(name);

    if(verify == true){
        console.log("First Name is : "+name);
    }
    else{
        console.log("!! Error !! \nFirst name should contain first capital letter with menimum lenth of 3 characters");
    }
    readline.close();
})