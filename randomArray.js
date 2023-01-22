// Generate an array of random numbers between 0 & 10 and remove duplicates

const items = 20
const range = 10

let myArray = []


function addToArray (items) {
    for (let i = 0; i < items; i++) {
        const num = Math.floor(Math.random() * (range + 1))
        myArray.push(num)
    }
    removeArrayDuplicates()
}


function removeArrayDuplicates () {
    let duplicateFreeArray = []
    myArray.forEach(element => {
        if (!duplicateFreeArray.includes(element)) {
            duplicateFreeArray.push(element)
        }
    })
    myArray = duplicateFreeArray
}

addToArray(items)

console.log(myArray)

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