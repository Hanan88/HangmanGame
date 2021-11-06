const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to fetch the puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.com/v3.1/all')

    if(response.status === 200){
        const data = await response.json()
        return data.find( (country) => country.altSpellings[0] === countryCode )
    }else{
        throw new Error('unable to fetch the country')
    }
}

//==============================================================
//==============================================================

// const getCountryOld = (countryCode => {
//     return fetch('https://restcountries.com/v3.1/all')
//     .then( (response) => {
//         if(response.status === 200){
//             return response.json()
//         }else{
//             throw new Error('unable to fetch the country')
//         }
//     })
//     .then( (data) => data.find( (country) => country.altSpellings[0] === countryCode ))
// })

//==============================================================
//==============================================================

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)

//             // Dispaly name of country 
//             data.forEach((country) => {
//                 if(country.altSpellings[0] === countryCode)
//                 resolve(country)
//             })
            
//         }else if(e.target.readyState === 4){
//             reject('unable to fitch data')
//         }
        
//     })

//     countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
//     countryRequest.send() 
// })

//==============================================================
//==============================================================

// const getCountry = (countryCode, callback) => {
//     //const countryCode= 'US'
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)

//             // Dispaly name of country 
//             data.forEach((country) => {
//                 if(country.altSpellings[0] === countryCode)
//                 //console.log(country.name.common)
//                 callback(undefined, country)
//             })
            
//         }else if(e.target.readyState === 4){
//             //console.log('An Error has taken place')
//             callback('unable to fitch data')
//         }
        
//     })

//     countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
//     countryRequest.send() 
// }