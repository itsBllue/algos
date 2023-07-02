/*
    This returns a factorial of n
*/
function factorial(n){
    if(n == 0){
        return 1;
    }
    let factorialSum = 1;
    for(let i = 2; i <= n;  i++){
      factorialSum  = factorialSum * i
    }
    return factorialSum
}

function factorial2(n){
    if(n == 0){
        return 1;
    }
    
    return n * factorial2(n-1);
}



console.log(factorial(5))
console.log(factorial2(5))