// 1
function calculate(a, b){
    if(typeof a === "string"){
    return false
    }

    if(typeof b === "string"){
    return false
    }

    return a + b
}

console.log(calculate(4, 6))
console.log(calculate("Rezi", 6))
console.log(calculate("110", 6))

// 2
function fahrToTemp(fahr){
    if(typeof fahr === "number"){
        return fahr * 1.8
    } else {
        return false
    }

}

const temp = fahrToTemp(10)
const fakeTemp = fahrToTemp("Rezi")
console.log(temp)
console.log(fakeTemp)

// 3 

function betterCalculate(a, b, operation){
    if(typeof a === "string"){
        return false
    }

    if(typeof b === "string"){
        return false
    }
    if(operation === "+"){
        return a + b
    }

    if(operation === "-"){
        return a - b
    }

    if(operation === ""){
        return a * b
    }

    if(operation === "/"){
        return a / b
    } 
}

const calculation1 = betterCalculate(4, 2, "+")
const calculation2 = betterCalculate(4, 2, "-")
const calculation3 = betterCalculate(4, 2, "*")
const calculation4 = betterCalculate(4, 2, "/")
const calculation5 = betterCalculate("Rezi", 3, "+")

console.log(calculation1)
console.log(calculation2)
console.log(calculation3)
console.log(calculation4)
console.log(calculation5)