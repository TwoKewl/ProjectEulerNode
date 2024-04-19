
var number = 600851475143;

function getPrimesUnder(n){
    let primes = [];

    for (let i = 2; i < n; i++){
        let prime = true;
        primes.every(j => {
            if (i % j == 0){
                prime = false;
                return false;
            } else {
                return true;
            }
        });

        if (prime){
            primes.push(i);
        }
    }

    return primes;
}

var primes = getPrimesUnder(10000);
var factors = [];
var primeIndex = 0;

while (primes[primeIndex] <= number){
    if (number % primes[primeIndex] == 0){
        number /= primes[primeIndex];
        factors.push(primes[primeIndex]);
    }
    
    primeIndex += 1;
}

console.log(factors)