// -----------------------------------

// Mutation Algorithm 

function res(arr) {
    const lowerCase = arr.map( s => s.toLowerCase())
    const result = lowerCase[1].split('')
        .map( s => lowerCase[0].includes(s))
    if(!result.includes(false))
       return true 
    else 
       return false 
}
   
res(["hello", "Hello"])  // true

