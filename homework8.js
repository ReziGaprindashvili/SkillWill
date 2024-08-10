// 1

function expo(num, x, cb) {
    if (x === 1) return num
    return expo(cb(num), x - 1, cb)
}

const result = expo(5, 3, (num) => num * num)
console.log(result)

// 2

function userPost(title, body){
    const div1 = document.createElement("div")
    div1.classList.add("post")
    
    const h2 = document.createElement("h2")
    h2.classList.add("post-title")
    h2.innerText = title

    const div2 = document.createElement("div")
    div2.classList.add("post-content")

    const p = document.createElement("p")
    p.innerText = body
    
    const button = document.createElement("button")
    button.classList.add("like-button")
    button.innerText = "Like Post"
    
    button.addEventListener('click', () => alert("Post Liked"))

    div2.append(p)
    div1.append(h2, div2, button)
    
    return div1
}



async function fetchData() {
    try {
        const rawData = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!rawData.ok){ 
            throw Error('Not good request')
        }
        const data = await rawData.json()
        
        data.forEach((u) => {
            const user = userPost(u.title, u.body)
            document.body.append(user)
        })
        
    } catch (error) {
        console.log(error.message)
    }
}

fetchData()

// 3

async function deepCloneObject(originalObject) {
    try {
        const newObject = Array.isArray(originalObject) ? [] : {};

    for (const key in originalObject) {
        if (originalObject.hasOwnProperty(key)) {
            newObject[key] = deepCloneObject(originalObject[key]);
        }
    }

    return newObject;
    } catch {
        if (originalObject === null || typeof originalObject !== 'object') {
            return originalObject;
        }
    } 
}


