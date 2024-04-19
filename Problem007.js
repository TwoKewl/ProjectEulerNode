
function getPrimeAt(n){
    let primes = [];
    let a = 2;

    while (primes.length <= n){
        let prime = true;
        primes.every(i => {
            if (a % i == 0){
                prime = false;
                return false;
            } else {
                return true;
            }
        });

        if (prime){
            primes.push(a);
        }

        a += 1;
    }

    return primes[n];
}

console.log(getPrimeAt(10001))