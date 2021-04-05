const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
    readline.question('Who are you? ', name => {
    let reg = /^[A-Z][a-zA-Z]{2,}/
    let verify = reg.test(name);
    if (verify) {
        console.log (`Hey there ${name}!`);
    }
    else{
        console.log("Please enter correct name");
    }
    readline.close();
    });
 
// var word = "Son";
// let reg = /^[A-Z][a-zA-Z]{2,}/
// console.log( reg.test(word) );
// console.log( reg2.test(word) );
// let reg2 = /(?=(?:.*[a-z]){3})/
