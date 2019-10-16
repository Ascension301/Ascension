class Card {
    title: string;
    type: string; // TODO: change to enum of ["Hero", "Monster", "Construct", "Treasure", "Vision"]
    detail: string;
    
    honorWorth: string;
    count: number; // amount of this card in the deck
    expansion: string; // which set this card is from, TODO: change to enum
    
    runeCost: number;
    powerCost: number;
    insightCost: number;
    
    fate() {
    }
    
    aquire() { // AKA "defeat" for monsters
    }
    
    play() {
    }
    
    banish() {
    }
    
    discard() { // AKA "destroy" for constructs
    }
}
