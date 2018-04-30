-----------------------------------

# FCC ALGORITHM #4

## # Mutation

##  Code <>

    function res(arr) {
        const lowerCase = arr.map( s => s.toLowerCase())
        const result = lowerCase[1].split('')
        .map( s => lowerCase[0].includes(s))
        if(!result.includes(false))
            { return true }
        else { return false }
    }
    console.log(res(["hello", "Hello"]))
    // true