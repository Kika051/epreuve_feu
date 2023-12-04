const fs = require("fs");

const findShapePosition = (boardFile, shapeFile) => {
  try {
    const boardContent = fs.readFileSync(boardFile, "utf8");
    const shapeContent = fs.readFileSync(shapeFile, "utf8");

    const boardLines = boardContent.split("\n");
    const shapeLines = shapeContent.split("\n");

    const isShapeAtPosition = (row, col) => {
      for (let i = 0; i < shapeLines.length; i++) {
        for (let j = 0; j < shapeLines[i].length; j++) {
          const boardChar = boardLines[row + i][col + j];
          const shapeChar = shapeLines[i][j];

          if (shapeChar !== " " && shapeChar !== boardChar) {
            return false;
          }
        }
      }
      return true;
    };

    for (let row = 0; row <= boardLines.length - shapeLines.length; row++) {
      for (
        let col = 0;
        col <= boardLines[0].length - shapeLines[0].length;
        col++
      ) {
        if (isShapeAtPosition(row, col)) {
          console.log("Trouvé !");
          console.log(`Coordonnées : ${row + 1},${col + 1}`);
          console.log("----");
          for (let i = 0; i < shapeLines.length; i++) {
            console.log(
              boardLines[row + i].substring(col, col + shapeLines[i].length)
            );
          }
          return;
        }
      }
    }

    console.log("Introuvable");
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers :", error.message);
  }
};

const boardFile = process.argv[2];
const shapeFile = process.argv[3];

if (!boardFile || !shapeFile) {
  console.log(
    "Veuillez fournir les noms des fichiers du plateau et de la forme à rechercher."
  );
  process.exit(1);
}

findShapePosition(boardFile, shapeFile);
