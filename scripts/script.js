// function definition 
// function greet (name) {
//     console.log(`Hello ${name}`)
// }

// Function Calling 
// greet("Erfan") 
// const name = (fname) => console.log(`Hello ${fname}`)
// name("Erfan") 

// function hello (name ,time = "day") { 
//     console.log( `Hello ${name} good ${time} `) 
// }
// hello ('Erfan', "Boy")

const enteredValue = prompt ("Enter the Value ") 
function CalculateArea (radius) {
    if (isNaN (radius) ) {
        alert ("It is not a number")
    }
    else {
        const area = Math.PI * radius * radius ; 
        return area.toFixed(2) 
    }
}
let result = CalculateArea(enteredValue) 
if (result) {
    console.log(result)
}
else {
    console.log("Not good ")
}