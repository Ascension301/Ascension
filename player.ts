import { Card } from "./card";

class Player {

    hand: Card[];
    discardPile: Card[];
    drawPile: Card[];
    
    dreamDeck?: Card[];
    insight?: number;
    
    runes: number;
    power: number;
    
    honor: number;
    
    beginTurn() {
    }
    
    playCard(card: Card) { // can be a card in the hand, construct, or trophy monster
        card.play();
    }
    
    banishCard(card: Card) {
    }
    
    endTurn() {
        this.discardPile.concat(this.hand);
        this.hand = [];
        for (let i = 0; i < 5; i++) {
            if (this.drawPile.length == 0) {
                this.drawPile = this.discardPile;
                this.discardPile = [];
                this.drawPile.sort(() => Math.random() - 0.5);
            }
            this.hand.push(this.drawPile.pop());
        }
    }

}
