import { Game } from "./Game.js";

const app = document.getElementById("app");
const game = new Game();

game.initGameObjects();
game.addListeners();

app.append(game.getView());
