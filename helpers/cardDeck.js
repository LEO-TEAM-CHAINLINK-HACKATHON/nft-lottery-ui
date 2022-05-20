import  deck  from "../cards";


 export default class cardDeck  {

    constructor (cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards () {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i +1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
    
}


export class Card {
    constructor(values) {
        this.deck = values
    }
}

export const freshDeck = () => {
    
        return deck.map(item => {
            return new Card(item)
        })
    
    
}