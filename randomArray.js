// Generate a duplicate-free array of random numbers between 0 & 1000

const amountOutput = 20
const range = 1000
const myArray = setNoDuplicateArray(amountOutput)


function setNoDuplicateArray (items) {
    const arrayWithDup = []
    const arrayWithoutDup = []
    if (!(amountOutput > range)){ // to avoid infinite loop
        while (arrayWithoutDup.length < items) {
            const num = Math.floor(Math.random() * range) 
            arrayWithDup.push(num)
            arrayWithDup.forEach(element => {
                if (!arrayWithoutDup.includes(element))
                    arrayWithoutDup.push(num)
            });
        }
    } else {
        console.log("amountOutput cannot be greater than range")
    }

    return arrayWithoutDup
}

console.log(myArray)

