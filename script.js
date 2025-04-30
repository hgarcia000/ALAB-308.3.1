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

// Part 3: Feeling Loopy
console.log("--Part 3: Feeling Loopy--")
let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let key = 1;
// console.log(csv)
for (let i = 0; i < csv.length; i++) {
    switch (key) {
        case 1:

            if(csv[i] === ","){
                key = 2;
                // continue;
            }
            else{
                cell1 += csv[i];
            }
            break;
    
        case 2:

        if(csv[i] === ","){
            key = 3;
            // continue;
        }
        else{
            cell2 += csv[i];
        }
            break;
            
        case 3:
            
        if(csv[i] === ","){
            key = 4;
            // continue;
        }
        else{
            cell3 += csv[i];
        }

            break;
            
        case 4:

        if(csv[i] === "\n" || i === csv.length - 1){
            key = 1;
            console.log(cell1, cell2, cell3, cell4);
            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
            // continue;
        }
        else{
            cell4 += csv[i];
        }
    
            break;
    
        // default:
        //     break;
    }


}