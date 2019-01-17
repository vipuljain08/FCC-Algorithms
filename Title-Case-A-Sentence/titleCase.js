//  -----------------------------------

//  Title Case A Sentence

const titleCase = str => str.split(' ')
                            .map( a => a[0].toUpperCase() + a.slice(1).toLowerCase())
                            .join(' ')

titleCase("The quick bRown fOX jumped oveR the LaZy dog")  // The Quick Brown Fox Jumped Over The Lazy Dog
titleCase("SuppORt AN opEn fUture")  // Support An Open Future

