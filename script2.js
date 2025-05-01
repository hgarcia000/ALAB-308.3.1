// R-ALAB 308.4.1
// Part 1: Refactoring Old Code
// Now that you have knowledge of arrays and objects, how would you change your approach to this problem?
// Incorporate arrays and array methods to the code.

// Part 2: Expanding Functionality

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let a = 1; // Column Variable
for (let i = 0; i < csv.indexOf("\n"); i++) {
    if (csv[i] === ",") {
        a++;
    }
    
}

const arr = csv.split("\n")
for (let i = 0; i < arr.length; i++) {
    const el = arr[i].split(",");
    arr[i] = el;
}
console.log(arr)
