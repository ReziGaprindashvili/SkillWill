// 1
function calculate(a, b, ...args){
    let multiplied = 1
    const sumResult = a + b
    for(const num of args){
        const result = multiplied *= num
    }
    const results = [sumResult, multiplied]
}

// 2

const user = {
    firstName: 'James',
    lastName: 'Bond',
    profile:{
        age: 40,
        nickname: '007'
    },
    banks: ['liberty', 'saq', 
        {address : {
            city: 'Tbilisi'
    }}]
}

const {banks:[ , , {address: {city}}]} = user 



function myCity({banks:[ , , {address : {city}}]}){
    console.log(city)
}

myCity(user)


//3

const user2 = {
        firstName: 'James',
        lastName: 'Bond',
        profile:{
            age: 40,
            nickname: '007'
        }
    }


function deepCloneObject(originalObject) {
    if (originalObject === null || typeof originalObject !== 'object') {
        return originalObject;
    }

    const newObject = Array.isArray(originalObject) ? [] : {};

    for (const key in originalObject) {
        if (originalObject.hasOwnProperty(key)) {
            newObject[key] = deepCloneObject(originalObject[key]);
        }
    }

    return newObject;
}
        
const clonedUser2 = deepCloneObject(user2);
console.log(clonedUser2);