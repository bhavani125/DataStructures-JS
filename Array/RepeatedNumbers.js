/**
 *
 * Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc
 * and store them in an array
 */

let digitsArr = new Array();

for (let i = 0; i <= 100; i++) {
    if((i%11)==0 && i!=0){
        digitsArr.push(i);
    }  
}
console.log(digitsArr)