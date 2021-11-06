const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let player1 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    player1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    //puzzleEl.textContent = player1.puzzle
    guessesEl.textContent = player1.statusMessage

    player1.puzzle.split('').forEach((star) => {
        const starEl = document.createElement('span')
        starEl.textContent = star
        puzzleEl.appendChild(starEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    player1 = new Hangman (puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getPuzzle ('2')
.then((puzzle) => console.log(puzzle))
.catch((err) => console.log(`Error: ${err}`))

getCountry ('US')
.then((country) => console.log(country.name.common))
.catch((err) => console.log(`Error: ${err}`))


// getCountry('US').then((country) => {
//     console.log(country)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// getCountry('US', (error, country) => {
//     if(error){
//         console.log(`Error: ${error}`)
//     }else{
//         console.log(`Country Name: ${country.name.common}`)
//     }
// })

// making http request

// const countryCode= 'US'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)

//         // Dispaly name of country 
//         data.forEach((country) => {
//             if(country.altSpellings[0] === countryCode)
//             console.log(country.name.common)
//         })
        
//     }else if(e.target.readyState === 4){
//         console.log('An Error has taken place')
//     }
    
// })

// countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
// countryRequest.send() 

// fetch 

// fetch('http://puzzle.mead.io/puzzle') 
// .then(response => response.status === 200 ?  response.json() : 'unable to fetch the puzzle')
// .then(data => console.log(data.puzzle))


