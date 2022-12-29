function greeting(){
    let userName = "Ana";
    console.log(userName);

    if(userName === "Ana"){
        console.log('Hello ' + userName +'!');
    }
}

greeting();
console.log(userName); //no puede imprimir porque username esta en scope function