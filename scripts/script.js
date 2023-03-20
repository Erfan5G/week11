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

// const enteredValue = prompt ("Enter the Value ") 
// function CalculateArea (radius) {
//     const radpara = document.querySelector("#radius")
//     radpara.textContent = `The enterd value is: ${enteredValue}`
//     if (isNaN (radius) ) {
//         console.log("It is not a number ")
//     }
//     else {
//         const area = Math.PI * radius * radius ; 
//         return area.toFixed(2) 
//     }
// }
// let result = CalculateArea(enteredValue) 
// if (result) {
//     const padpara = document.querySelector("#result")
//     padpara.textContent = `The result with radius of ${enteredValue}, is ${result}` 
// }
// else {
//     console.log("Not good ")
// }

function populatelist (myshoppinglist) { 
    const ulelement = document.querySelector(".shopping") ;
    console.log(ulelement)
    for (let index = 0; index < shoppinglist.length; index++) {
        const element = shoppinglist[index];
        
        let new1 = document.createElement("li") 
        new1.textContent = element
        ulelement.appendChild(new1)
    }
    //same as the upper one 
    for (const item of shoppinglist) {
        let new1 = document.createElement("li") 
        new1.textContent = item 
        ulelement.appendChild(new1)
    } 

}




let shoppinglist = ['breaad' , ' cheese' , 'Green pepper ' ]
populatelist(shoppinglist)










function squarelist () {
    const squareaccess = document.querySelector("ul") 
    squareaccess.classList.remove("circleList")
    squareaccess.classList.add("squareList")
}


squarelist()