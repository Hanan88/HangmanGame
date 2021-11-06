class Hangman {
    constructor (guessedWord, guessednumber) {
        this.guessedWord = guessedWord.toLowerCase().split('')
        this.guessednumber = guessednumber
        this.guessedLetters = []
        this.status = 'playing'
    }

    calculateStatus () {
        const finished = this.guessedWord.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.guessednumber === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage () {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guessednumber}`
        } else if (this.status === 'failed') {
            return `Nice try! The Word was "${this.guessedWord.join('')}".`
        } else {
            return 'Great work! You guessed the work.'
        }
    }

    get puzzle () {
        let puzzle = ''

        this.guessedWord.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }

    makeGuess (guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.guessedWord.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.guessednumber--
        }

        this.calculateStatus()
        }
} 