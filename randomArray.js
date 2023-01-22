// Generate an array of number between 0 & 1000, without duplicates

const amountOutput = 20
const range = 1000
const myArray = setNoDuplicateArray(amountOutput)


function setNoDuplicateArray (items) {
    const arrayWithDup = []
    const arrayWithoutDup = []
    while (arrayWithoutDup.length < items) {
        const num = Math.floor(Math.random() * range) 
        // if amountOutput is larger than range, it creates an infinite loop 
        arrayWithDup.push(num)
        arrayWithDup.forEach(element => {
            if (!arrayWithoutDup.includes(element))
                arrayWithoutDup.push(num)
        });
    }
    return arrayWithoutDup
    

}

console.log(myArray)

