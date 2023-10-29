import { Player } from 'Player.js';
import { Team } from './Team.js';
import { GameBoard } from './GameBoard.js';
import { Communication } from './Communication.js';
import { Actions } from './Actions.js';
import { NPC } from './NPC.js';

// Instantiate necessary classes
const team = new Team();
const gameBoard = new GameBoard();
const communication = new Communication();

// Instantiate players and NPCs
const player1 = new Player('Player 1', 'Role 1');
const player2 = new Player('Player 2', 'Role 2');
team.players.push(player1, player2);

const npc1 = new NPC('Type 1', 'Location 1');
gameBoard.npcs.push(npc1);

// Define game functions and interactions
function startGame() {
  // Game initialization logic
  // Display initial game state or setup
}

function playerAction() {
  // Implement player actions based on the game mechanics
  // Stealth, communication, incapacitation, etc.
}

// Event listeners
// Event listener for the start button
document.getElementById('startButton').addEventListener('click', () => {
  const gameContainer = document.getElementById('gameContainer');
  gameContainer.innerHTML = `<img src="./img/splash.jpg" alt="Game Splash Image">`;
});

// Event listener for the player slider
document.getElementById('playerSlider').addEventListener('input', (event) => {
  const selectedPlayers = event.target.value;
  console.log('Selected players:', selectedPlayers); // Use selectedPlayers for game setup
});
