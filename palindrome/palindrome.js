// -----------------------------------

// Check For Palindrome

const palindrome = str => {
    const newStr = str.replace(/[\W_]+/g,"").toLowerCase()
    const check = newStr.split('').reverse().join('')
    return newStr == check
}
    
palindrome('A man, a plan, a canal. Panama')  // amanaplanacanalpanama
palindrome('RaceCar') //  racecar
