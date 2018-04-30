-----------------------------------

# FCC ALGORITHM #5

## # Find the longest word in a string

##  Code <>

    const str = "The quick brown fox jumped over the lazy dog"
    const x = Math.max(...str.split(' ').map(a => a.length ))
    console.log(x)    // 6