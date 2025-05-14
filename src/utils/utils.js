import fs from "fs";
import path from "path";

const cwd = process.cwd();
const dataPath = path.join(cwd, "data", "game.json");

export const getRandomChoice = () => {
  const choices = [
    process.env.SECRET_PIERRE,
    process.env.SECRET_FEUILLE,
    process.env.SECRET_CISEAUX,
  ];
  return choices[Math.floor(Math.random() * choices.length)];
};

export const loadResults = () => {
  try {
    if (!fs.existsSync(dataPath)) {
      return { player1: 0, player2: 0, draws: 0 };
    }

    const raw = fs.readFileSync(dataPath, "utf-8").trim();
    if (!raw) return { player1: 0, player2: 0, draws: 0 };

    const data = JSON.parse(raw);
    return data;
  } catch (err) {
    console.error("Erreur de lecture de game.json :", err.message);
    return { player1: 0, player2: 0, draws: 0 };
  }
};

export const saveResults = (results) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(results, null, 2), "utf-8");
  } catch (err) {
    console.error("Erreur de sauvegarde :", err.message);
  }
};
