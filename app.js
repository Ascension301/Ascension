import { Board } from "./board";
import { Player } from "./player";
import { Card } from "./card";

let humanPlayer = new Player();
let cpuPlayer = new Player();
let board = new Board();

for (let i = 0; i < 8; i++) {
  humanPlayer.hand.push(new Card("Apprentice")); // TODO: create Card constructor
  cpuPlayer.hand.push(new Card("Apprentice"));
}
for (let i = 0; i < 2; i++) {
  humanPlayer.hand.push(new Card("Militia"));
  cpuPlayer.hand.push(new Card("Militia"));
}

board.startGame();
