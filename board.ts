import { Card } from "./card";

class Board {

    centerDeck: Card[];
    centerRow: Card[];

    startGame() {
        this.centerDeck.sort(() => Math.random() - 0.5);
        for (let i = 0; i < 6; i++) {
            this.centerRow.push(this.centerDeck.pop());
        }
    }

}
