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
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
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
            if (i === csv.length - 1) {
                cell4 += csv[i];
            }
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