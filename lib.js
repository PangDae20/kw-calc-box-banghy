function avg(numbers){
    let s=0;
    for(let i=0;i<numbers.length;i++){
        s+=numbers[i];
    }
    return s/numbers.length;
}

function prime(num){
    for(let i=num-1;i>=Math.sqrt(num);i--)
        if (num%i==0)
            return false;
        
    return true;
}
function fact(num){
    let result=1;
    for(let i=1;i<=num;i++)
        result*=i;
    return result;
}
exports.avg=avg;
exports.prime=prime;
exports.fact=fact;