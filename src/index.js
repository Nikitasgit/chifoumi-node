import readline from "readline";
import dotenv from "dotenv";
dotenv.config();

import { loadResults, saveResults } from "./utils/utils.js";
import { playGame } from "./controller/gameController.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let results = loadResults();

const askToPlay = () => {
  console.table(results);
  rl.setPrompt("JOUER (press 'p') > ");
  rl.prompt();
  rl.on("line", (input) => {
    const answer = input.trim().toLowerCase();
    if (answer === "p") {
      results = playGame(results);
      saveResults(results);
      console.table(results);
      rl.prompt();
    } else {
      console.log("Commande non reconnue. Tapez 'p' pour jouer.");
      rl.prompt();
    }
  });
};

askToPlay();
