console.log(2>1)
console.log(2!=1)
console.log(2<1)

console.log("2" > 1)
console.log("02" > 1)

//datatype must be same while doing comparisons


//we avoid these type pf conversions
 //js sometimes doesn't give the predictable results
console.log( null > 0)
console.log( null == 0)
console.log( null >= 0)  
//the reason is that ans equality check == and comparisons < > >= <= work differently. Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)



//strict check, ===
console.log("2" == 2)  //it is true, because here conevrsions will take place 
console.log("2" === 2) //datatype check, that's why strict checking