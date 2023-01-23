// Generate an array of random numbers between 0 & 10 and remove duplicates

const items = 15
const range = 10


// create a random array
function createNumberArray (items) {
    let array = []
    for (let i = 0; i < items; i++) {
        const num = Math.floor(Math.random() * (range + 1))
        array.push(num)
    }
    return array
    
}

// remove duplicates from numbered array
function removeArrayDuplicates (array) {
    let duplicateFreeArray = []
    array.forEach(element => {
        if (!duplicateFreeArray.includes(element)) {
            duplicateFreeArray.push(element)
        }
    })
    return duplicateFreeArray
}

// generate array of objects with number of occurrence for each number
function listOccurrences (array) {
    let newArray = []
    array.forEach(element => {
        let filteredArray = array.filter(number => number === element)
        let occurrences = filteredArray.length
        let object1 = { num: element, occ: occurrences}
        newArray.push(object1)
    })
    let newArrayDupFee = newArray.filter((v,i,a)=>a.findIndex(v2=>(v2.num===v.num))===i)
    return newArrayDupFee
}

// Pass an array of objects with number of occurrence and log in console
function displayOccurrenceMessage (arrayOfObjects) {
    arrayOfObjects.forEach(element => {
        console.log(`Number ${element.num} is present ${element.occ} times`)
    })
}

// Initialise an array of numbers
let myArray = createNumberArray(items)

// Create array of objects listing the occurrences of each number
let myArrayOccurrence = listOccurrences(myArray)


// Log array in console
console.log(myArray)
// Log in console number of occurences
displayOccurrenceMessage(myArrayOccurrence)


// FIRST TRY 

// const items = 20
// const range = 1000

// const arrayWithDup = []
// const arrayWithoutDup = []


// function createArray (items) {
//     if (!(items > range)){                                      // to avoid infinite loop
//         while (arrayWithoutDup.length < items) {                // keep looping until dup-free array is init
//             const num = Math.floor(Math.random() * range)       // generate random integer
//             arrayWithDup.push(num)                              // push to temporary array
//             arrayWithDup.forEach(element => { 
//                 if (!arrayWithoutDup.includes(element))         // if number is not already in clean array, push it
//                     arrayWithoutDup.push(num)
//             });
//         }
//     } else {
//         console.log("items cannot be greater than range")
//     }
//     return arrayWithoutDup
// }


// const myArray = createArray(items)
// console.log(myArray)


// ----