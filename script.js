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