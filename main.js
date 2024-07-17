function calculate(num1, num2){
    if(typeof num1 === "string"){
    return false
    }

    if(typeof num2 === "string"){
    return false
    }

    return num1 + num2
}

console.log(calculate(110, 90))
console.log(calculate("Rezi", 90))
console.log(calculate("110", 90))