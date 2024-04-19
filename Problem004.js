

function checkPalindrome(number){
    number = number.toString();
    let reversed = number.split('').reverse().join('');

    return (reversed == number);
}

var palindromes = [];

for (let i = 1; i < 1000; i++){
    for (let j = 1; j < 1000; j++){
        let product = i * j;

        if (checkPalindrome(product)){
            palindromes.push(product);
        }
    }
}

palindromes.sort((a, b) => b - a);
console.log(palindromes[0])