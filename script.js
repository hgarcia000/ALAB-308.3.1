// Part 1: Fizz Buzz
console.log("--Part 1: Fizz Buzz--")
for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("Fizz Buzz")
    }else if(index % 3 === 0){
        console.log("Fizz")
    }else if (index % 5 === 0) {
        console.log("Buzz")
    }else {
        console.log(index)
    }
    
}

// Part 2: Prime Time
console.log("--Part 2: Prime Time--")
let n = 120;
let d = 0;
while (d !== 2) {
    d = 0;
    n++;
    for(let i = 1; i <= n; i++){
        if (n % i === 0) {
            d++
        }
    }
    if(d === 2){
        console.log(n);
        break;
    }
}