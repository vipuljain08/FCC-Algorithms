// -----------------------------------

// Find the longest word in a string

const longestWord = str => Math.max(...str.split(' ').map(a => a.length ))

longestWord("The quick brown fox jumped over the lazy dog")  // 6
longestWord("Support an open future")  // 7
