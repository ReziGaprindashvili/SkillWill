//Lection 4

// 1

let replacingFunc = (string, valueToReplace, valueToReplaceWith) => {
    let index = string.indexOf(valueToReplace)
    let newString = string.slice(0, index) + valueToReplaceWith + string.slice(index + valueToReplace.length)
    return newString
}
console.log(replacingFunc("I love pepperoni pizza", "pepperoni", "cheese"))

// 2 

let upper = (sentence) => {
    const words = sentence.split(" ")
    const upperWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return upperWords.join(" ")
}
console.log(upper("my name is rezi"))

// 3

const Array = [
    {name: "Lasha", age: 30},
    {name: "Saba", age: 20},
]
let sortByAge = (users) =>{
    return users.slice().sort((a,b) => a.age - b.age);
}
console.log(sortByAge(Array))








// Lection 3
// // 1
// function calculate(a, b, ...args){
//     let multiplied = 1
//     const sumResult = a + b
//     for(const num of args){
//         const result = multiplied *= num
//     }
//     const results = [sumResult, multiplied]
// }

// // 2

// const user = {
//     firstName: 'James',
//     lastName: 'Bond',
//     profile:{
//         age: 40,
//         nickname: '007'
//     },
//     banks: ['liberty', 'saq', 
//         {address : {
//             city: 'Tbilisi'
//     }}]
// }

// const {banks:[ , , {address: {city}}]} = user 



// function myCity({banks:[ , , {address : {city}}]}){
//     console.log(city)
// }

// myCity(user)


// //3

// const user2 = {
//         firstName: 'James',
//         lastName: 'Bond',
//         profile:{
//             age: 40,
//             nickname: '007'
//         }
//     }


// function deepCloneObject(originalObject) {
//     if (originalObject === null || typeof originalObject !== 'object') {
//         return originalObject;
//     }

//     const newObject = Array.isArray(originalObject) ? [] : {};

//     for (const key in originalObject) {
//         if (originalObject.hasOwnProperty(key)) {
//             newObject[key] = deepCloneObject(originalObject[key]);
//         }
//     }

//     return newObject;
// }
        
// const clonedUser2 = deepCloneObject(user2);
// console.log(clonedUser2);

