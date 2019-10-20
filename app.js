import { Board } from "./board";
import { Player } from "./player";
import { Card } from "./card";

let humanPlayer = new Player();
let cpuPlayer = new Player();
let players = [humanPlayer, cpuPlayer];

let board = new Board();

for (let i = 0; i < 8; i++) {
  players.forEach(player => player.hand.push(new Card("Apprentice")));
}
for (let i = 0; i < 2; i++) {
  players.forEach(player => player.hand.push(new Card("Militia")));
}

board.startGame();
