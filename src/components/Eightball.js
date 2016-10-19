const h = require('react-hyperscript')
const React = require('react')

const genAnswer = function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

var sayings = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes, definitley.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Rely hazy try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Outlook not so good.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Very doubtful.'
]

module.exports = React.createClass({
  getInitialState: function () {
    return { results: '' }
  },
  onShake: function () {
    var options = genAnswer(0, 19).toString()
    return this.setState({ results: sayings[options] })
  },
  render: function () {
    return (
      h('div.pa2.bg-black.white', [
        h('h1.pa2', 'Magic Eight Ball'),
        h('button.white.pa6.br-100.bg-  black.f1', { onClick: this.onShake }, '8'),
        h('div.pt3.pl5', this.state.results)
      ])
   )
  }
})
