const h = require('react-hyperscript')
const React = require('react')

const generatedAnswer = function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const generatedGuess = function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const GuessNumber = React.createClass({
  getInitialState: function () {
    return { number: generatedAnswer(1,10).toString(),
      guess: '',
      comment: '',
      answer: '',
      computerComment: '',
      computerNumber: generatedGuess(1,10).toString()}
  },
  setGuess: function (e) {
     this.setState({ guess: e.target.value })
  },
  setAnswer: function (e) {
    this.setState({ answer: e.target.value })
  },
  onGuess: function (event) {
    if (this.state.guess === this.state.number) {
      return this.setState({ comment: 'Correct!' })
    } else if (this.state.guess > this.state.number) {
      return this.setState({ comment: 'Lower' })
    } else if (this.state.guess < this.state.number) {
      return this.setState({ comment: 'Higher' })
    }

    console.log(this.state.guess)
    console.log(this.state.number)
  },
  onAnswer: function (event) {
    if (this.state.answer === this.state.computerNumber) {
      return this.setState({ computerComment: 'Correct!' })
    } else if (this.state.answer !== this.state.computerNumber) {
      return this.setState({ computerComment: 'You tricked the computer!' })
    }
  },
  render () {
    return (
      h('div', [
        h('h1', 'Guess a Number Between 1-10'),
        h('input', {
          onChange: this.setGuess,
          value: this.state.guess,
          placeholder: 'Your Number Goes Here'
        }),
        h('button', { onClick: this.onGuess }, 'Guess'),
        h('div', this.state.comment),
        h('h1', 'Give the computer a number to guess!'),
        h('input', {
          onChange: this.setAnswer,
          value: this.state.answer,
          placeholder: 'Try and trick the computer!'
        }),
        h('button', { onClick: this.onAnswer }, 'Ask'),
        h('div', this.state.computerComment)
      ])
    )
  }
})
module.exports = GuessNumber

// have the computer randomly select number 1 - 10
// and have the user try to guess the number
// and the computer will respond higher or lower
// until

// ----

// have the user think of a number 1 - 10, and
// make the computer guess the number
// by the user providing input
// higher or lower

//
