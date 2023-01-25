console.log("Hello World!")
let age = 10
let age2 = 30

const name = "Darren"
const name2 =" Daz"

let firstname = "Darren"
let surname = "Holroyd"

console.log(`I think ${firstname} ${surname} is the best!` )

let fullName= name+""+firstname

fullName = `${name} ${firstname}`

// test
/* test 2 */
 
// dividen = divisor * quotient + remainder

let addition = 10 + 20
let sumofages = age + age2
let difference = age2 - age
let multiplaction = age * age2
let division = age2/age

console.log(addition, sumofages,difference, multiplaction,division)

let greaterThan = age > age2

console.log(greaterThan)

let namesArray = ["Darren","Daz","John"]

let person1 = {name: "Darren",
age: 28}

let person2 = {
    name:"Daz",
Age: 30 }

let person3 = {name:"John",
age: 30}

let people = [person1, person2, person3]
console.log(people)

function additionofnumbers(a,b=30){
    // let a = 10
    // let b = 30
    
    let sum = a + b
    return sum
}
let additionvalue = additionofnumbers(10,50)
console.log(additionvalue)
console.log(additionofnumbers(40,50))

let numbers = [10,20,30,40,50,60,70,80,90,100]
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
console.log("loop finished")

let start = 0 
while(start<numbers.length){ console.log(numbers[start])
start++}
