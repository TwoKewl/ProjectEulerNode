
var sum = 0;

function fibonacci(n){
    let a = 0;
    let b = 1;
    let iter = 0;

    while (iter < n){
        let c = a + b;
        b = a;
        a = c;
        iter++;
    }

    return a;
}

var i = 0;

while (fibonacci(i) < 4000000){
    let num = fibonacci(i);
    if (num % 2 == 0) sum += num;
    i += 1;
}


console.log(sum);