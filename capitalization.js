// Capitalize the first letter of a string
function capitalization (name = "gary") { // defaults to "gary" is empty
    let capName = "";
    for (let i = 0; i < name.length; i++) {
        let letter = name.charAt(i)
        if (i === 0){
            capName += letter.toUpperCase();
        } else { 
            capName += letter;
        }
        // console.log(capName)
    }
    return capName
}

const myName = "barbara"

// Log function with variable
console.log(capitalization(myName))

// Log function with no variable passed
console.log(capitalization())

