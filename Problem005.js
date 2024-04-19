
var number = 0;

while (true){
    let found = true;
    number += 20;
    for (let i = 19; i > 0; i--){
        if (number % i != 0){
            found = false;
            break;
        }
    }

    if (found){
        break;
    }
}

console.log(number);