let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score) //conversion method
console.log(typeof valueInNumber);  //type is number  but score also includes alphabets so this is the conversion
console.log(valueInNumber)  //NaN means not a number




let score_1 = null

console.log(typeof score_1);

let ValueInNumber = Number(score_1)
console.log(typeof ValueInNumber);
console.log(ValueInNumber)






let score_2 = undefined

console.log(typeof score_2);

let ValueInnumber = Number(score_2)
console.log(typeof ValueInnumber);
console.log(ValueInnumber) 






let score_3 = true 

console.log(typeof score_3);

let ValueinNumber = Number(score_3)
console.log(typeof ValueinNumber);
console.log(ValueinNumber) 



//notes
//"33" => 33
//"33abc" => NaN
//"true" => 1; false =>0


let IsLoggedIn = 1

let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);




let isLoggedIn = ""

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);





let IsloggedIn = 0

let booleanIsloggedIn = Boolean(IsloggedIn)
console.log(booleanIsloggedIn)







let IsLoggedin = "vani"

let booleanIsLoggedin = Boolean(IsLoggedin)
console.log(booleanIsLoggedin);


//1 => true; 0 => false
//"" => false
//"vani" => true



let someNumber = 33
let stringNumber = String(someNumber) 
console.log(stringNumber)
console.log(typeof stringNumber)


//***********************Operations***************************

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(9+3)
console.log(9-3)
console.log(9*3)
console.log(9**3)
console.log(9/3)
console.log(9%3)

let str1 = "vani"
let str2 = " priya"

let str3 =  str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log(1+2)

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3)

console.log(true)
console.log(+true)
console.log(+false)
console.log(+ "")    //we should not do this, we don't prefer it

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;    //prefix operator, value pehle increment hoti h
console.log(gameCounter)

let GameCounter = 100
GameCounter++;    //postfix operator, value baad me increment hoti h, but answer same hoti hai
console.log(GameCounter)

