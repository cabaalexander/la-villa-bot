const lang = require('../../config/language')
const cardsEnum = require('../../config/cardsEnum')

module.exports = function Card(label) {
  switch (label) {
    case cardsEnum.WOLF:
        this.name = lang.cardWolf
        break;
    case cardsEnum.HUMAN:
        this.name = lang.cardHuman
        break;
  }

  this.message = `${lang.cardMessage} "${this.name.toUpperCase()}"`
}
