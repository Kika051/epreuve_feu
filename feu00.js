if (process.argv.length !== 4) {
  console.log("Usage: node air00.js <width> <height>");
  process.exit(1);
}

const width = parseInt(process.argv[2]);
const height = parseInt(process.argv[3]);

if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
  console.log(
    "Veuillez fournir des valeurs valides pour la largeur et la hauteur."
  );
  process.exit(1);
}

const repeatString = (str, n) => {
  return new Array(n + 1).join(str);
};

const drawRectangle = (width, height) => {
  const horizontalBorder = `o${repeatString("-", width - 2)}o`;

  console.log(horizontalBorder);

  for (let i = 0; i < height - 2; i++) {
    console.log(`|${repeatString(" ", width - 2)}|`);
  }

  if (height > 1) {
    console.log(horizontalBorder);
  }
};

drawRectangle(width, height);
