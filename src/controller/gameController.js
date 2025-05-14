import { getRandomChoice } from "../utils/utils.js";
import dotenv from "dotenv";
dotenv.config();

const { SECRET_PIERRE, SECRET_FEUILLE, SECRET_CISEAUX } = process.env;

const playRound = (p1Choice, p2Choice) => {
  console.log(`Joueur 1: ${p1Choice}, Joueur 2: ${p2Choice}`);
  if (p1Choice === p2Choice) return "draw";
  if (
    (p1Choice === SECRET_PIERRE && p2Choice === SECRET_CISEAUX) ||
    (p1Choice === SECRET_FEUILLE && p2Choice === SECRET_PIERRE) ||
    (p1Choice === SECRET_CISEAUX && p2Choice === SECRET_FEUILLE)
  ) {
    return "player1";
  }

  return "player2";
};

export const playGame = (results) => {
  const p1Choice = getRandomChoice();
  const p2Choice = getRandomChoice();
  const result = playRound(p1Choice, p2Choice);

  switch (result) {
    case "player1":
      console.log("Joueur 1 gagne !");
      results.player1 += 1;
      break;
    case "player2":
      console.log("Joueur 2 gagne !");
      results.player2 += 1;
      break;
    case "draw":
      console.log("Égalité !");
      results.draws += 1;
      break;
  }

  return results;
};
