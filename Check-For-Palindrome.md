-----------------------------------

# FCC ALGORITHM #3

## # Check For Palindrome

##  Code <>

    const palindrome = str => {
        const newStr = str.replace(/[\W_]+/g,"").toLowerCase()
        const check = newStr.split('').reverse().join('')
        return newStr == check
    }
    console.log(palindrome('A man, a plan, a canal. Panama'))
    // amanaplanacanalpanama