// two ypes of datatypes, primitive and non primtive on the basis of how the data is stored and how can we access them

//Primitive, (call by value) 7 types
//7 types : string(call by value), Number, Boolean, Null, Undefined, Symbol(uniqueness), Bigint 

const score = 100
const scoreValue = 100.3
const isloggedin = false 
const outsideTemp = null 
let userEmail;             //value would be undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
const bigNumber = 3456544261456466349n     //automatically becomes the big int




//Reference or Non-primitive datatype
//Arrayas, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]       //arrays
let myobj = {                                     
    name : "vani",                                   //objects
    age : 20,
}

const myFunction = function(){                      //functions declared as variables
    console.log("hello world");
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction)


//datatypes of all the non primitive datatypes are functions(function ka datatype specially object function hota hai)
//remember it (imp from interview pov)
/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  object function
       Object  =>  object

*/