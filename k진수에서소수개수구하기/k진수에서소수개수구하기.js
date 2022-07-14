export
function solution(n, k) {
    let answer = 0;
    const converted = n.toString(k);
    converted.split("0").forEach(number => {
        if (!number || number <= 1) return ;
        if (!isPrime(number)) return;
        answer += 1;
    })
    return answer;
}

function isPrime(number) {
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}