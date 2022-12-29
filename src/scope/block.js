function fruits(){
    if(true){
        var fruit1 = 'Apple'; // Function Scope
        let fruit2 = 'Kiwi'; //Block scope
        const fruit3 = 'Banana'; // Block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();