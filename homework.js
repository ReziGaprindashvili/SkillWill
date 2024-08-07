// Lection 7

const makeTimeout = document.getElementById("makeTimeout").value;
const sellTimeout = document.getElementById("sellTimeout").value;
const deliverTimeout = document.getElementById("deliverTimeout").value;

function makeToys(){
    return new Promise((resolve,reject)  => {
        if(Math.random() > 0.1){
            resolve ('Undefected')
        } else {
            reject ('Defected') 
        }
    })
}



function sellToys(status){
    return new Promise((resolve, reject) => {
        if(status === 'Undefected'){
            if(Math.random() > 0.7){
                resolve ('Toy has been sold')
            } else {
                reject ('Toy was unsuccessful') 
            }
        }   
    })
    
}

function deliverToys(info){
    return new Promise((resolve, reject) => {
        if(info === 'Toy has been sold'){
            if(Math.random() > 0.8){
                resolve ('Toy was delivered')
            } else {
                reject ('Toy was not delivered') 
            }
        }
    })
}


makeToys()
    .then((status) => sellToys(status))
    .then((info) => deliverToys(info))
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

// async function proimisfy() {
//     try {
//         const status = await makeToys()
//         const result = await sellToys(status)
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }


// async function makeToys(){
//         if(Math.random() > 0.1){
//             return 'Defected'
//         } else {
//             return 'Undefected'
//         }
//     }
    
//     async function sellToys(status){
//         if(status === 'Undefected'){
//             if(Math.random() > 0.7){
//                 return 'Toy has been sold'
//             } else {
//                 return 'Toy was unsuccessful' 
//             }
//         }   
//     }
    
//     async function proimisfy() {
//         try {
//             const status = await makeToys()
//             const result = await sellToys(status)
//             console.log(result)
//         } catch (error) {
//             console.log(error)
//         }
//     }

// console.log(proimisfy())




// Lection 6

// 1

// function toggleModal(){
//     const modalContainer = document.querySelector('#modalContainer')
//     modalContainer.classList.toggle('hidden')
// }

// 2

// let redeemBtn = document.querySelector('#redeemButton')

// function changeBackgroundColor(){
//     const colorInput = document.getElementByID('colorInput').value.toLowerCase()
//     const validColors = ["blue", "red", "black", "white", "green"]
//     if(validColors.includes(colorInput)){
//         document.body.style.backgroundColor = colorInput
//     } else {
//         alert('Invalid color, Please enter one of these colors: blue, red, black, white, green.')
//     }
// }
// redeemBtn.addEventListener('click', changeBackgroundColor())


// 3

// let calculateButton = document.getElementById('calculateButton')
// let averageResult = document.getElementById('averageResult')

// calculateButton.addEventListener('click', calculateAverage())

// function calculateAverage() {
//     const numberInput = document.getElementByID('numberInput').value
//     const numbersArray = numberInput.split(':').map(Number)

//     if(numbersArray.length === 0) {
//         averageResult.textContent = 'No numbers entered'
//         return
//     }


//     const sum = numbersArray.reduce((total, num) => total + num, 0)
//     const average = sum / numbersArray.length

//     averageResult.textContent = `Average: ${average.toFixed(2)}`
// }


// Lection 5

// 1

// const divHideButton = document.querySelector("#btn")
// const divv = document.querySelector("#divv")

// divHideButton.addEventListener("click", () => {
//     divv.style.display = 'none'
// })

// // 2

// const div1 = document.createElement("div")
// const h2 = document.createElement("h2")
// const text1 = document.createTextNode("Gandalf")
// const a = document.createElement("a")
// const text2 = document.createTextNode("Go to Profile")
// div1.setAttribute("id", "card")
// a.setAttribute("href", "#")
// h2.append(text1)
// a.append(text2)
// div1.append(h2, a)
// console.log(div1)

// // 3

// let score = 0

// function questionAppear(question, answers, correctAnswerIndex){
//     const questionElement = document.querySelector("#question")
//     question.textContent = question

//     const answerElements = document.querySelectorAll(".answer")
//     answerElements = answers.forEach((element, index) => {
//         element.textContent = answers[index]
//         element.classList.remove("correct", "incorrect")
//     })
// }

// function answerChecker(selectedElement) {
//     const answerElements = document.querySelectorAll(".answer")
//     const selectedAnswerIndex = Array.from(answerElements).indexOf(selectedElement)

//     if(selectedAnswerIndex === correctAnswerIndex){
//         score++
//         selectedElement.classList.add("correct")
//     } else {
//         selectedElement.classList.add("incorrect")
//     }
//     scoreUpdater()
// }

// function scoreUpdater(){
//     const scoreElement = document.querySelector("#score")
//     scoreElement.textContent = `Score : ${score}`
// }

// const question = "Which is id selector?"
// const answers = ['.', '*', '#',]
// const correctAnswerIndex = 3

// questionAppear(question, answers, correctAnswerIndex)






//Lection 4

// 1

// let replacingFunc = (string, valueToReplace, valueToReplaceWith) => {
//     let index = string.indexOf(valueToReplace)
//     let newString = string.slice(0, index) + valueToReplaceWith + string.slice(index + valueToReplace.length)
//     return newString
// }
// console.log(replacingFunc("I love pepperoni pizza", "pepperoni", "cheese"))

// // 2 

// let upper = (sentence) => {
//     const words = sentence.split(" ")
//     const upperWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     return upperWords.join(" ")
// }
// console.log(upper("my name is rezi"))

// // 3

// const Array = [
//     {name: "Lasha", age: 30},
//     {name: "Saba", age: 20},
// ]
// let sortByAge = (users) =>{
//     return users.slice().sort((a,b) => a.age - b.age);
// }
// console.log(sortByAge(Array))




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

