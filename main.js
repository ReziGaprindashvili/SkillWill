// const user = {
//     name : 'James',
//     lastName: 'Bond',
//     userName: '007',
//     move : function() {
//         console.log('James Bond in action')
//     }
// }

// console.log(user.name, user.lastName, user.userName)
// user.move()

// let A = 30
// let B = A

// A = 45

// console.log(A)
// console.log(B)

// const A = {
//     name : 'James',
//     lastName: 'Bond',
//     userName: '007',
// }

// const B = A

// B.name = 'Rezi'

// console.log(A)
// console.log(B)

// const arr = ['James', 'Rezi', 'Revaza']
// const A = {
//     name : 'James',
//     lastName: 'Bond',
//     userName: '007',
// }

// console.log(arr.length)
// console.log(arr[0])

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] + ' is moving')
// }

// for(const name of arr){
//     console.log(name)
// }

// for(const f in A){
//     console.log(A[f])
// }
// for(const i in arr){
//     console.log(i)
// }

// function randomNumber(){
//     return parseInt(Math.random() * 10) + 1
// }

// let result = randomNumber()

// while(result !== 7){
//     result = randomNumber()
//     onsole.log(result)
// }

// const arr = ['James', 'Rezi', 'Revaza']
// const resForEach = arr.forEach(function(element, index){
//     return index + ' is equal to ' + element 
// })
// const resMap = arr.map(function(element, index){
//     return index + ' is equal to ' + element 
// })

// const array = [1, 5, 2, 5, 7, 1, 9]
// const resFilter = array.filter(function(element){
//     return element >= 5
// })

// const resFind = array.find(function(el){
//     return el > 4
// })
// console.log(array)
// console.log(resFind) 


// const user = {
//     firstName: 'James',
//     lastName: 'BOnd',
//     nickName: '007',
//     age: 40
// }

// const {lastName, firstName, nickName, age} = user

// const users = ['James', 'Giga', 'Rezi', 'Giorgi']

// const [name1, , name2] = users

// const firstname = 'Temo'

// const user = {
//     firstName: 'James',
//     lastName: 'Bond',
//     profile: {
//         nickName: '007',
//         age: 40,
//         address: {
//             street: 'Tamarashvili13'
//         }
//     }
// }

// const {firstname:myFirstname, lastName, profile: {nickName,age,address: {street}}} = user
// console.log(firstName, lastName, nickName, age, street)

// function myProfile({profile: {address: {street}}}){
//     return 'adress' + ' ' + street
// }

// function profile(username){
//     return 'hello' + ' ' + username
// }

// // strinf literals
// const newProfile = (username) => `hello ${username}`

// const user = {
//     firstName: 'James',
//     lastName: 'Bond',
//     sayHello: () => {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// user.sayHello

// const user = {
//     firstName: 'James',
//     lastName: 'Bond',
//     profile:{
//         age: 40,
//         nickname: '007'
//     },
//     targets: ['target1', 'target2']

// }
// const user2 = {
//     ...user,
//     profile: {
//         ...user.profile
//     },
//     targets: [...user.targets]
// }
// user.profile.age = 45

// console.log(user.profile.age)
// console.log(user1.profile.age)

// function calculateSum( ...args){
//     let sum = 0

//     for(const num of args){
//         sum += num
//     }
// }

// console.log(calculateSum(3, 5, 10))

const calculatePercentage = (numbers) => {
    let sum = 0
    for(const num of numbers){
        sum += num
    }
    return numbers.map((el) => ((el / sum ) * 100).toFixed(2))
}

// const names = ["James", "Temo", "Rezi"]
// names.pop()
// names.push("Nona")
// names.shift()
// names.unshift("Tamuna")

// const newArr = names.splice(1)

// console.log(newArr)
// console.log(names)

// const combineArrays = ([start, end], arr2) => {
//     // const result = []
//     // result.push(arr1[0])
//     // for(const num of arr2){
//     //     result.push(num)
//     // }
//     // result.push(arr1[1])
//     // return result 

//     return [start, ...arr2, end]
// }

// console.log(combineArrays([1,9], [2, 3, 4, 5, 6, 7, 8]))

// const capitalWords = (words) => {
//  const result = []

//  for(const word of words){
//     const splitArr = word.split('_'); // ["agent, "james", "bond"]
//     const capitalArr = []

//     for(const w of splitArr){
//         const upper = w[0].toUpperCase() + w.slice(1)
//         capitalArr.push(upper)
//     }
//     result.push(capitalArr.join(" "))
//  }
//  return result
// return words.map
//     ((word) => word.split('_')
//     .map((w) => w[0].toUpperCase() + w.slice(1))
//     .join(" ")
// )
// }

// console.log(capitalWords(["hello_World", "agent_james_bond", "world_cup_sports_association"]))

// const person = {
//     name: 'James',
//     address: {
//         tbilisi: {
//             district: {
//                 street: "Tamarashvili"
//             }
//         }
//     },
//     friends: [
//         {closeFriend: {name: "Giga"}},
//         {closeFriend: {name: "Temo"}}
//     ]
// }

// const deepCopy = (obj) => {
//     const result = {}
//     for(const fn in obj)
//         if(typeof obj[fn] === 'object'){

//             if(Array.isArray(obj[fn])){
//                 // Array
//                 result[fn] = obj[fn].map((el) => deepCopy(el))
//             } else {
//                 // Object
//                 result[fn] = deepCopy(obj[fn])
//             }

//         } else {
//             result[fn] = obj[fn]
//         }

//         return result
// }

// const person2 = deepCopy(person)
// person2.name = "Jango"
// person2.address.tbilisi.district.street = 'Marjanishvili'
// person2.friends[0].closeFriend.name = 'Nino'

// console.log(person)
// console.log(person2)


// const bodyEl = document.body


// console.log(bodyEl.lastElementChild.previousElementSibling)

// const team = document.getElementById("team")
// const members = document.getElementsByClassName("member")
// const tagMembers = document.getElementsByTagName("h1")

// const team = document.querySelector("#team")
// const classTeam = document.querySelectorAll(".member")

// console.log(members)

// const divEl = document.createElement("div")
// const h1El = document.createElement("h1")
// const textEl = document.createTextNode("Hello there")

// const h1E2 = document.createElement("h2")
// const textE2 = document.createTextNode("Welcome Home")

// h1E2.classList.add("custom")
// h1El.setAttribute("id", "myId")
 
// h1El.append(textEl)
// h1E2.append(textE2)

// divEl.append(h1El, h1E2)
// document.body.append(divEl)

// const btn = document.getElementById('mybtn')

// btn.addEventListener("click", (e) => {
//     e.target.style.color = 'white'
//     e.target.style.background = 'red'

//     h1El.style.display = 'none'
//     h1E2.style.display = 'none'
// })


// CALLBACKS

// setTimeout(() => {
//     console.log('started')
// }, 3000)

// function dance(action, callback){
//     console.log(action)
//     callback()
// }

// dance('this is a long dance', () => {
//     console.log('Applaud')
// })

//PROMISES (THEN, CATCH)

// const promiseResponse = new Promise((resolve, reject) => {
//     if(Math.random() > 0.1){
//         resolve('this is true')
//     } else {
//         reject('this is false')
//     }
// })
// promiseResponse
//     .then((res) => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => console.log('this was tuff'))

// function makeToys(){
//     return new Promise((resolve, reject) => {
//         if(Math.random() > 0.1){
//             resolve('Defected')
//         } else {
//             reject('Undefected')
//         }
//     })
// }

// function sellToys(status){
//    return new Promise((resolve, reject) => {
//     if(status === 'Undefected'){
//         if(Math.random() > 0.7){
//             resolve('Toy has been sold')
//         } else {
//             reject('Toy was unsuccessful')
//         }
//     }   
// })
// }
// makeToys()
//     .then((status) => sellToys(status))
//     .then((res) => console.log(res))
//     .catch(err => console.log(err))

// ASYNC / AWAIT

// async function sum(){
//     return 1 + 1
// }

// async function makeToys(){
//     if(Math.random() > 0.1){
//         return 'Defected'
//     } else {
//         return 'Undefected'
//     }
// }

// async function sellToys(status){
//     if(status === 'Undefected'){
//         if(Math.random() > 0.7){
//             return 'Toy has been sold'
//         } else {
//             return 'Toy was unsuccessful' 
//         }
//     }   
// }

// async function proimisfy() {
//     try {
//         const status = await makeToys()
//         const result = await sellToys(status)
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// EVENT LOOP (last in first out(LIFO)) 

// function bar(){
//     console.log('Barr')
// }

// function baz() {
//     bar()
// }

// function foo() {
//     baz()
// }

// console.log('start')

// setTimeout(() => {
//     console.log('timeout result')
// }, 0 )

// console.log('end')

// NORMAL CB
// function repeat(str, x, cb){
//     let result = str 

//     for(let i = 0; i < x; i++){
//         result = action(result)
//     }


//     return result
// }

// const a = repeat('James', 4, (str) => `! ${str} !`)
// const b = repeat('James', 4, (str) => `* ${str} *`)
// const c = repeat('Peter', 4, (str) => `# ${str} #`)

// console.log(a)
// console.log(b)
// console.log(c)

// REVURSIVE CB
// function repeatRecursive(str, x, cb){
//     if(x === 0) return str
//     return repeatRecursive(cb(str), x - 1, cb)
// }

// const a = repeatRecursive('James', 4, (str) => `! ${str} !`)
// const b = repeatRecursive('James', 4, (str) => `* ${str} *`)
// const c = repeatRecursive('Peter', 4, (str) => `# ${str} #`)

// console.log(a)
// console.log(b)
// console.log(c)

// function task(num){
//     return new Promise((resolve, reject) => {
        
//         if(typeof num !== 'number') reject('error')
//         if(num % 2 === 1) setTimeout(() => resolve('odd'), 1000)
//         if(num % 2 === 0) setTimeout(() => reject('even'), 2000)
//     })
// }
// task(7)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res => console.log(res))  
//     .catch(err => console.log(err))

async function fetchData() {
    try {
        const rawData = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!rawData.ok){ 
            throw Error('Not good request')
        }
        const data = await rawData.json()
        console.log(data)
        
    } catch (error) {
        console.log(error.message)
    }
}
fetchData()