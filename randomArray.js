// Generate a duplicate-free array of random numbers between 0 & 1000

const items = 20
const range = 1000
const myArray = setNoDuplicateArray(items)


function setNoDuplicateArray (items) {
    const arrayWithDup = []
    const arrayWithoutDup = []
    if (!(items > range)){ // to avoid infinite loop
        while (arrayWithoutDup.length < items) { // keep looping until dup-free array is init
            const num = Math.floor(Math.random() * range) // generate random integer
            arrayWithDup.push(num) // push to temporary array
            arrayWithDup.forEach(element => { 
                if (!arrayWithoutDup.includes(element)) // if number is not already in clean array, push it
                    arrayWithoutDup.push(num)
            });
        }
    } else {
        console.log("items cannot be greater than range")
    }
    return arrayWithoutDup
}

console.log(myArray)

