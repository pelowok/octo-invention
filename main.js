import Game from './game';
import Player from './player';
import Card from './card';

// Create game and players
const game = new Game();
const player1 = new Player("Player 1");
const player2 = new Player("Player 2");
const player3 = new Player("Player 3");

// Add players to the game
game.addPlayer(player1);
game.addPlayer(player2);
game.addPlayer(player3);

// When the "Start Heist" button is clicked
game.startHeist();
